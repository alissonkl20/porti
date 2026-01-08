import React from 'react';
import '../css/Stacks.css';

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

function Stacks() {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div className="stack-container">
        <h2>Minhas Tecnologias</h2>
        <div className="stack-list grid">
          {stacks.map((stack, idx) => (
            <React.Fragment key={idx}>
              <div className="stack-name">{stack.name}</div>
              <div className="stack-description">{stack.description}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stacks;
