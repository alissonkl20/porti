import { useRef, useEffect } from 'react';
import {
  SiTypescript, SiReact, SiNodedotjs, SiDocker,
  SiPython, SiFlask, SiHtml5, SiCss3, SiOpenai,
  SiOpenjdk // Substituído SiJava por SiOpenjdk
} from 'react-icons/si';
import '../../css/slider.css';

const items = [
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss3 /> },
  { name: 'OpenAI', icon: <SiOpenai /> },
  { name: 'Java', icon: <SiOpenjdk /> }, // Adicionado Java com SiOpenjdk
];

export function InfiniteSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;
    let start = null;
    let translateX = 0;

    function animate(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      translateX = -(elapsed * 0.06) % (slider.scrollWidth / 2);
      slider.style.transform = `translateX(${translateX}px)`;
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplica os itens para efeito infinito
  return (
    <div className="infinite-slider-wrapper">
      <div className="infinite-slider" ref={sliderRef}>
        {[...items, ...items].map((item, idx) => (
          <span className="slider-item" key={idx}>
            <span style={{ fontSize: '2rem', verticalAlign: 'middle', marginRight: 8 }}>{item.icon}</span>
            <span>{item.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}