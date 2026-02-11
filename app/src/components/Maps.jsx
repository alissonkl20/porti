import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import '../css/map.css';


export const Maps = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const [rotation, setRotation] = useState({ x: 115.6, y: 23.0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [landData, setLandData] = useState(null);
  const [countryNames, setCountryNames] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [clickedCountry, setClickedCountry] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, name: '' });
  const [autoRotate, setAutoRotate] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const animationRef = useRef(null);
  
  // Adicionando debounce para eventos de redimensionamento
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  useEffect(() => {
    const debouncedResize = debounce(() => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const size = Math.min(width - 20, isMobile ? 350 : isTablet ? 500 : 650);
        setDimensions({ width: size, height: size });
      }
    }, 200);

    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, [isMobile, isTablet]);

  // Detectar tipo de dispositivo
  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    updateDeviceType();
    window.addEventListener('resize', updateDeviceType);
    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  // Ajustar lista de países importantes baseado no dispositivo
  const getImportantCountries = useCallback(() => {
    if (isMobile) {
      // Apenas países mais importantes em mobile
      return {
        '076': 'Brasil',
        '484': 'México',
        '840': 'EUA',
        '032': 'Argentina',
        '156': 'China',
        '356': 'Índia',
        '276': 'Alemanha',
        '826': 'UK',
        '392': 'Japão',
        '643': 'Rússia',
        '036': 'Austrália',
      };
    } else if (isTablet) {
      // Lista média para tablets
      return {
        '076': 'Brasil',
        '484': 'México',
        '840': 'EUA',
        '032': 'Argentina',
        '152': 'Chile',
        '156': 'China',
        '356': 'Índia',
        '276': 'Alemanha',
        '380': 'Itália',
        '250': 'França',
        '826': 'UK',
        '724': 'Espanha',
        '392': 'Japão',
        '643': 'Rússia',
        '036': 'Austrália',
        '124': 'Canadá',
        '710': 'África do Sul',
      };
    } else {
      // Lista completa para desktop
      return {
        '076': 'Brasil',
        '484': 'México',
        '840': 'EUA',
        '032': 'Argentina',
        '152': 'Chile',
        '156': 'China',
        '356': 'Índia',
        '276': 'Alemanha',
        '380': 'Itália',
        '250': 'França',
        '826': 'Reino Unido',
        '724': 'Espanha',
        '392': 'Japão',
        '643': 'Rússia',
        '036': 'Austrália',
        '124': 'Canadá',
        '554': 'Nova Zelândia',
        '710': 'África do Sul',
        '170': 'Colômbia',
        '218': 'Equador',
        '604': 'Peru',
        '858': 'Uruguai',
        '862': 'Venezuela'
      };
    }
  }, [isMobile, isTablet]);

  // Configuração otimizada da projeção com ajustes por dispositivo
  const projection = useCallback(() => {
    const scaleFactor = isMobile ? 2.0 : isTablet ? 2.1 : 2.2;
    const scale = Math.min(dimensions.width, dimensions.height) / scaleFactor;
    
    return d3.geoOrthographic()
      .scale(scale)
      .translate([dimensions.width / 2, dimensions.height / 2])
      .precision(isMobile ? 0.3 : 0.5)
      .clipAngle(90)
      .rotate([rotation.x, -rotation.y]);
  }, [dimensions, rotation.x, rotation.y, isMobile, isTablet]);

  // Função para obter nome do país pelo ID
  const getCountryNameById = (id) => {
    const countryNamesById = {
      '076': 'Brasil',
      '484': 'México',
      '840': 'Estados Unidos',
      '032': 'Argentina',
      '152': 'Chile',
      '170': 'Colômbia',
      '218': 'Equador',
      '600': 'Paraguai',
      '604': 'Peru',
      '858': 'Uruguai',
      '124': 'Canadá',
      '156': 'China',
      '250': 'França',
      '276': 'Alemanha',
      '356': 'Índia',
      '380': 'Itália',
      '392': 'Japão',
      '410': 'Coreia do Sul',
      '428': 'Letônia',
      '442': 'Luxemburgo',
      '528': 'Países Baixos',
      '616': 'Polônia',
      '643': 'Rússia',
      '724': 'Espanha',
      '752': 'Suécia',
      '756': 'Suíça',
      '764': 'Tailândia',
      '826': 'Reino Unido',
      '036': 'Austrália',
      '554': 'Nova Zelândia',
      '710': 'África do Sul',
      '404': 'Quênia',
      '566': 'Nigéria',
      '818': 'Egito',
      '504': 'Marrocos',
      '012': 'Argélia',
      '048': 'Bahrein',
      '096': 'Brunei',
      '116': 'Camboja',
      '144': 'Sri Lanka',
      '196': 'Chipre',
      '203': 'República Tcheca',
      '208': 'Dinamarca',
      '233': 'Estônia',
      '246': 'Finlândia',
      '268': 'Geórgia',
      '300': 'Grécia',
      '348': 'Hungria',
      '352': 'Islândia',
      '360': 'Indonésia',
      '364': 'Irã',
      '368': 'Iraque',
      '372': 'Irlanda',
      '376': 'Israel',
      '400': 'Jordânia',
      '398': 'Cazaquistão',
      '414': 'Kuwait',
      '417': 'Quirguistão',
      '422': 'Líbano',
      '426': 'Lesoto',
      '434': 'Líbia',
      '438': 'Liechtenstein',
      '440': 'Lituânia',
      '446': 'Macau',
      '450': 'Madagascar',
      '454': 'Malawi',
      '458': 'Malásia',
      '462': 'Maldivas',
      '466': 'Mali',
      '470': 'Malta',
      '478': 'Mauritânia',
      '480': 'Maurício',
      '484': 'México',
      '492': 'Mônaco',
      '496': 'Mongólia',
      '498': 'Moldávia',
      '499': 'Montenegro',
      '500': 'Montserrat',
      '504': 'Marrocos',
      '508': 'Moçambique',
      '512': 'Omã',
      '516': 'Namíbia',
      '520': 'Nauru',
      '524': 'Nepal',
      '528': 'Países Baixos',
      '531': 'Curaçao',
      '533': 'Aruba',
      '548': 'Vanuatu',
      '554': 'Nova Zelândia',
      '558': 'Nicarágua',
      '562': 'Níger',
      '566': 'Nigéria',
      '570': 'Niue',
      '578': 'Noruega',
      '580': 'Marianas do Norte',
      '581': 'Ilhas Menores Distantes dos EUA',
      '583': 'Micronésia',
      '584': 'Ilhas Marshall',
      '585': 'Palau',
      '586': 'Paquistão',
      '591': 'Panamá',
      '598': 'Papua-Nova Guiné',
      '600': 'Paraguai',
      '604': 'Peru',
      '608': 'Filipinas',
      '612': 'Ilhas Pitcairn',
      '616': 'Polônia',
      '620': 'Portugal',
      '624': 'Guiné-Bissau',
      '626': 'Timor-Leste',
      '630': 'Porto Rico',
      '634': 'Catar',
      '642': 'Romênia',
      '643': 'Rússia',
      '646': 'Ruanda',
      '652': 'São Bartolomeu',
      '654': 'Santa Helena',
      '659': 'São Cristóvão e Nevis',
      '660': 'Anguilla',
      '662': 'Santa Lúcia',
      '663': 'São Martinho (França)',
      '666': 'São Pedro e Miquelão',
      '670': 'São Vicente e Granadinas',
      '674': 'San Marino',
      '678': 'São Tomé e Príncipe',
      '682': 'Arábia Saudita',
      '686': 'Senegal',
      '688': 'Sérvia',
      '690': 'Seicheles',
      '694': 'Serra Leoa',
      '702': 'Singapura',
      '703': 'Eslováquia',
      '704': 'Vietnã',
      '705': 'Eslovênia',
      '706': 'Somália',
      '710': 'África do Sul',
      '716': 'Zimbábue',
      '724': 'Espanha',
      '728': 'Sudão do Sul',
      '729': 'Sudão',
      '740': 'Suriname',
      '744': 'Svalbard',
      '748': 'Suazilândia',
      '752': 'Suécia',
      '756': 'Suíça',
      '760': 'Síria',
      '762': 'Tajiquistão',
      '764': 'Tailândia',
      '768': 'Togo',
      '772': 'Toquelau',
      '776': 'Tonga',
      '780': 'Trinidad e Tobago',
      '784': 'Emirados Árabes Unidos',
      '788': 'Tunísia',
      '792': 'Turquia',
      '795': 'Turcomenistão',
      '796': 'Ilhas Turcas e Caicos',
      '798': 'Tuvalu',
      '800': 'Uganda',
      '804': 'Ucrânia',
      '807': 'Macedônia do Norte',
      '818': 'Egito',
      '826': 'Reino Unido',
      '831': 'Guernsey',
      '832': 'Jersey',
      '833': 'Ilha de Man',
      '834': 'Tanzânia',
      '840': 'Estados Unidos',
      '850': 'Ilhas Virgens Americanas',
      '854': 'Burkina Faso',
      '858': 'Uruguai',
      '860': 'Uzbequistão',
      '862': 'Venezuela',
      '876': 'Wallis e Futuna',
      '882': 'Samoa',
      '887': 'Iêmen',
      '894': 'Zâmbia'
    };
    
    return countryNamesById[id] || `País ${id}`;
  };

  // Função para calcular o centro de um país
  const getCountryCenter = (feature) => {
    const proj = projection();
    const centroid = d3.geoCentroid(feature);
    const [x, y] = proj(centroid);
    return { x, y, visible: x > 0 && x < dimensions.width && y > 0 && y < dimensions.height };
  };

  // Inicializar dados do mapa
  useEffect(() => {
    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(worldData => {
        const countries = topojson.feature(worldData, worldData.objects.countries);
        setLandData(countries);
        
        const countryNamesMap = {};
        worldData.objects.countries.geometries.forEach(geom => {
          const id = geom.id;
          countryNamesMap[id] = getCountryNameById(id);
        });
        
        setCountryNames(countryNamesMap);
        drawMap();
      })
      .catch(err => {
        console.error('Erro ao carregar dados do mapa:', err);
        d3.json('https://unpkg.com/world-atlas@2.0.2/countries-110m.json')
          .then(worldData => {
            const countries = topojson.feature(worldData, worldData.objects.countries);
            setLandData(countries);
            
            const countryNamesMap = {};
            worldData.objects.countries.geometries.forEach(geom => {
              const id = geom.id;
              countryNamesMap[id] = getCountryNameById(id);
            });
            
            setCountryNames(countryNamesMap);
            drawMap();
          })
          .catch(err2 => {
            console.error('Erro com URL alternativa:', err2);
          });
      });
  }, []);

  // Animar rotação automática otimizada
  useEffect(() => {
    if (!autoRotate) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    let lastTime = 0;
    const rotationSpeed = isMobile ? 0.03 : 0.05; // Mais lento em mobile

    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      
      if (deltaTime > 16) {
        setRotation(prev => ({
          ...prev,
          x: prev.x + rotationSpeed
        }));
        lastTime = timestamp;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoRotate, isMobile]);

  // Atualizar dimensões com ajuste responsivo aprimorado
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        
        if (isMobile) {
          // Em mobile, usar altura menor
          const size = Math.min(350, width - 20);
          setDimensions({
            width: size,
            height: size
          });
        } else if (isTablet) {
          // Em tablet, tamanho médio
          const size = Math.min(500, width - 30);
          setDimensions({
            width: size,
            height: size
          });
        } else {
          // Em desktop, tamanho máximo
          const size = Math.min(650, width - 40);
          setDimensions({
            width: size,
            height: size
          });
        }
      }
    };

    updateDimensions();
    
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateDimensions);
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => resizeObserver.disconnect();
  }, [isMobile, isTablet]);

  // Função para encontrar país pelo ponto
  const findCountryAtPoint = useCallback((x, y) => {
    if (!landData || !countryNames) return null;

    const proj = projection();
    const point = proj.invert([x, y]);
    if (!point) return null;

    for (let i = 0; i < landData.features.length; i++) {
      const feature = landData.features[i];
      if (d3.geoContains(feature, point)) {
        return {
          id: feature.id,
          name: countryNames[feature.id] || getCountryNameById(feature.id)
        };
      }
    }
    
    return null;
  }, [landData, countryNames, projection]);

  // Desenhar o mapa com nomes dos países
  const drawMap = useCallback(() => {
    if (!canvasRef.current || !landData) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const proj = projection();
    const path = d3.geoPath().projection(proj).context(context);
    const importantCountries = getImportantCountries();

    // Limpar canvas
    context.clearRect(0, 0, dimensions.width, dimensions.height);

    // Fundo gradiente
    const gradient = context.createRadialGradient(
      dimensions.width / 2,
      dimensions.height / 2,
      0,
      dimensions.width / 2,
      dimensions.height / 2,
      dimensions.width / 2
    );
    gradient.addColorStop(0, 'rgb(0, 0, 0)');
    gradient.addColorStop(1, 'rgb(0, 0, 0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, dimensions.width, dimensions.height);

    // Gradícula de fundo (apenas em desktop/tablet)
    if (!isMobile) {
      const graticule = d3.geoGraticule(); 
      context.beginPath();
      path(graticule());
      context.strokeStyle = 'rgb(0, 0, 0)';
      context.lineWidth = 0.2;
      context.stroke();
    }

    // Desenhar países
    landData.features.forEach(feature => {
      context.beginPath();
      path(feature);
      
      if (hoveredCountry && hoveredCountry.id === feature.id) {
        context.fillStyle = 'rgba(66, 245, 96, 0.95)';
      } else if (clickedCountry && clickedCountry.id === feature.id) {
        context.fillStyle = 'rgba(255, 223, 0, 0.9)';
      } else {
        context.fillStyle = isMobile ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.85)';
      }
      
      context.strokeStyle = isMobile ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 0)';
      context.lineWidth = isMobile ? 0.3 : 0.5;
      context.fill();
      context.stroke();
    });

    // Desenhar nomes dos países importantes
    context.save();
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    
    // Tamanho da fonte baseado no dispositivo
    const fontSize = isMobile ? 9 : isTablet ? 10 : 11;
    context.font = `bold ${fontSize}px "Segoe UI", Arial, sans-serif`;
    
    landData.features.forEach(feature => {
      const countryId = feature.id;
      const countryName = importantCountries[countryId];
      
      if (countryName) {
        const center = getCountryCenter(feature);
        
        if (center.visible) {
          // Fundo para o texto
          context.fillStyle = 'rgba(0, 0, 0, 0.7)';
          const textWidth = context.measureText(countryName).width;
          const padding = isMobile ? 2 : 4;
          const cornerRadius = isMobile ? 2 : 3;
          
          context.beginPath();
          context.roundRect(
            center.x - textWidth/2 - padding,
            center.y - 8 - padding,
            textWidth + padding * 2,
            16 + padding * 2,
            cornerRadius
          );
          context.fill();
          
          // Texto
          context.fillStyle = '#FFFFFF';
          context.fillText(countryName, center.x, center.y);
        }
      }
    });
    context.restore();

    // Borda do globo
    context.beginPath();
    path({ type: 'Sphere' });
    context.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    context.lineWidth = isMobile ? 1.5 : 2;
    context.stroke();

    // Tooltip (apenas em desktop/tablet)
    if (tooltip.visible && tooltip.name && !isMobile) {
      context.save();
      
      context.fillStyle = 'rgb(0, 0, 0)';
      context.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      context.lineWidth = 1;
      
      const fontSize = isTablet ? 12 : 14;
      context.font = `bold ${fontSize}px "Segoe UI", Arial, sans-serif`;
      const textWidth = context.measureText(tooltip.name).width;
      const padding = isTablet ? 12 : 15;
      const tooltipWidth = textWidth + padding * 2;
      const tooltipHeight = isTablet ? 35 : 40;
      
      let x = tooltip.x + 20;
      let y = tooltip.y - 20;
      
      if (x + tooltipWidth > dimensions.width - 10) {
        x = tooltip.x - tooltipWidth - 20;
      }
      if (y - tooltipHeight < 10) {
        y = tooltipHeight + 20;
      }
      if (y + tooltipHeight > dimensions.height - 10) {
        y = dimensions.height - tooltipHeight - 10;
      }
      
      context.beginPath();
      context.roundRect(x, y - tooltipHeight, tooltipWidth, tooltipHeight, 8);
      context.fill();
      context.stroke();
      
      context.fillStyle = '#FFFFFF';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(tooltip.name, x + tooltipWidth / 2, y - tooltipHeight / 2);
      
      context.beginPath();
      context.moveTo(tooltip.x, tooltip.y);
      context.lineTo(x + 10, y - 10);
      context.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      context.lineWidth = 1;
      context.stroke();
      
      context.restore();
    }
  }, [landData, dimensions, hoveredCountry, clickedCountry, tooltip, projection, isMobile, isTablet, getImportantCountries]);

  // Atualizar desenho
  useEffect(() => {
    let frameId;
    
    const render = () => {
      drawMap();
      frameId = requestAnimationFrame(render);
    };
    
    frameId = requestAnimationFrame(render);
    
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [drawMap]);

  // Handlers de interação otimizados para mobile
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setAutoRotate(false);
    setIsDragging(true);
    
    const rect = canvasRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    if (clientX && clientY) {
      setLastPos({
        x: clientX,
        y: clientY
      });
      
      // Em mobile, verificar clique imediatamente
      if (isMobile) {
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        
        const country = findCountryAtPoint(x, y);
        if (country) {
          setClickedCountry(country);
          setTooltip({
            visible: true,
            x: x,
            y: y,
            name: `🎯 ${country.name}`
          });
          
          setTimeout(() => {
            setTooltip(prev => ({ ...prev, visible: false }));
          }, 1500);
        }
      }
    }
  }, [isMobile, findCountryAtPoint]);

  const handleMouseMove = useCallback((e) => {
    if (!canvasRef.current || !landData) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    if (!clientX || !clientY) return;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Verificar hover (apenas em desktop/tablet)
    if (!isMobile) {
      const country = findCountryAtPoint(x, y);
      if (country) {
        setHoveredCountry(country);
        setTooltip({
          visible: true,
          x: x,
          y: y,
          name: country.name
        });
      } else {
        setHoveredCountry(null);
        setTooltip(prev => ({ ...prev, visible: false }));
      }
    }

    // Arrastar
    if (!isDragging) return;

    const deltaX = clientX - lastPos.x;
    const deltaY = clientY - lastPos.y;

    const sensitivity = isMobile ? 0.5 : isTablet ? 0.4 : 0.3;
    
    setRotation(prev => ({
      x: prev.x + deltaX * sensitivity,
      y: Math.max(-85, Math.min(85, prev.y - deltaY * sensitivity * 0.5))
    }));

    setLastPos({ x: clientX, y: clientY });
  }, [isDragging, lastPos, landData, findCountryAtPoint, isMobile, isTablet]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleClick = useCallback((e) => {
    if (isMobile) return; // Em mobile, já tratamos no handleMouseDown
    
    if (isDragging) {
      setIsDragging(false);
      return;
    }

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const country = findCountryAtPoint(x, y);
    if (country) {
      setClickedCountry(country);
      setTooltip({
        visible: true,
        x: x,
        y: y,
        name: `🎯 ${country.name}`
      });
      
      setTimeout(() => {
        setTooltip(prev => ({ ...prev, visible: false }));
      }, 2000);
    }
  }, [isDragging, findCountryAtPoint, isMobile]);

  const handleReset = useCallback(() => {
    setRotation({ x: 115.6, y: 23.0 });
    setClickedCountry(null);
    setAutoRotate(true);
  }, []);

  const toggleAutoRotate = useCallback(() => {
    setAutoRotate(!autoRotate);
  }, [autoRotate]);

  return (
    <div className="maps-container">
      <div 
        ref={containerRef}
        className={`canvas-container ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        onClick={handleClick}
        onContextMenu={(e) => {
          e.preventDefault();
          handleReset();
        }}
      >
        <canvas
          ref={canvasRef}
          width={dimensions.width}
          height={dimensions.height}
          className="world-map-canvas"
        />
        
        {/* Instruções para mobile */}
        {isMobile && (
          <div className="mobile-instructions">
            <p>📱 Arraste para girar • Toque para selecionar</p>
          </div>
        )}
      </div>
    </div>
  );
};