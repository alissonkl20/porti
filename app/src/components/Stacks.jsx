"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "./hooks/useOutsideClick";
import "../css/stack.css";

function Stacks() {
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setHovered(false);
      }
    }

    if (hovered && typeof hovered === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hovered]);

  useOutsideClick(ref, () => setHovered(null));

  const stacks = [
    {
      name: 'Front-end Development',
      description:
        'Desenvolvimento de interfaces web modernas e responsivas utilizando React, JavaScript, HTML5 e CSS3. Experiência com Next.js, TailwindCSS, Bootstrap, Material UI e Framer Motion para criar experiências interativas, acessíveis e de alta performance.',
    },
    {
      name: 'Back-end Development',
      description:
        'Desenvolvimento de APIs RESTful e microsserviços com Node.js, Spring-boot e Flask. Integração com bancos de dados PostgreSQL e MySQL, além de experiência em conteinerização de aplicações com Docker.',
    },
    {
      name: 'DevOps',
      description:
        'Automação de deploys, versionamento de ambientes, integração contínua e entrega contínua (CI/CD). Experiência com Docker, gerenciamento de ambientes e boas práticas de infraestrutura.',
    },
    {
      name: 'Quality Assurance (QA)',
      description:
        'Execução de testes unitários e de integração utilizando Cypress, além de testes manuais, testes de estresse e revisão de segurança para garantir a qualidade e robustez das aplicações.',
    },
    {
      name: 'Git',
      description:
        'Controle de versão eficiente com Git, incluindo criação de branches, merges, resolução de conflitos e colaboração em equipes de desenvolvimento ágil.',
    },
  ];

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div className="stack-container">
        <h2>Area de Atua&ccedil;&atilde;o</h2>
        <div className="stack-list">
          {stacks.map((stack, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHovered(stack.name)}
              onMouseLeave={() => setHovered(null)}
              className="stack-card cursor-pointer">
              <div className="stack-name">{stack.name}</div>
              <AnimatePresence>
                {hovered === stack.name && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="stack-description">
                    {stack.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stacks;
