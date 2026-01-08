import React, { useRef, useEffect } from 'react';
import {
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiDocker, SiCypress,
  SiJest, SiPython, SiFlask, SiNextdotjs, SiHtml5, SiCss3, SiOpenai
} from 'react-icons/si';
import '../../css/slider.css';

const items = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Cypress', icon: <SiCypress /> },
  { name: 'Jest', icon: <SiJest /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss3 /> },
  { name: 'OpenAI', icon: <SiOpenai /> },
];

export default function InfiniteSlider() {
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