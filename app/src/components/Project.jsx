
import '../css/Project.css';

const projects = [
  {
    title: 'Atendezap',
    desc: [
      'Atuei como Desenvolvedor Full Stack freelancer, entregando o módulo de transcrição de áudio, realizando correção de bugs e otimizando a performance.',
      'Impactos:',
      '+20% em segurança',
      '+15% em performance',
      '+30% em qualidade de testes',
      '+25% em usabilidade',
      '+10% em escalabilidade',
    ],
  },
  {
    title: 'Ecostoque',
    desc: [
      'Desenvolvimento de um SaaS de gestão de estoque com foco em pequenas e médias empresas, utilizando React, Flask e PostgreSQL. O sistema visa otimizar o controle de inventário, reduzir perdas e melhorar a eficiência operacional dos negócios.',
      'Impactos:',
      '+30% na agilidade e eficiência do controle de estoque.',
      '+40% na precisão do inventário.',
      '+20% na redução de revisões manuais.',
      '+10% na satisfação do cliente.'
    ],
  },
  {
    title: 'QA e Tester',
    desc: [
      'Atuação como desenvolvedor Full Stack freelancer em plataforma SaaS de autoatendimento via WhatsApp. Principais entregas: testes manuais e de estresse, revisão e refatoração de código, aprimoramento de UI/UX e responsividade, testes de segurança (sec tester).',
      'Impactos:',
      '+35% na estabilidade do sistema.',
      '+20% na experiência do usuário.',
      '+20% na segurança geral da aplicação.',
      '+15% na performance sob carga.',
      '+10% na satisfação do cliente.'
    ],
  },
  {
    title: 'Teste Automatizado',
    desc: [
      'Desenvolvi um script para executar testes em um e-commerce automatizado com Python e PyAutoGUI, simulando um usuário real para identificar bugs e falhas de usabilidade.',
      'Impactos:',
      '+25% na detecção precoce de erros',
      '+30% na eficiência dos testes.',
      '+45% na cobertura de experiência do usuário.'
    ],
  },
  {
    title: 'RPA de Processos',
    desc: [
      'Desenvolvimento de RPA local para automação do fechamento de folha de pagamento.',
      'Funcionalidades:',
      'Execução automática todo dia 28 para fechamento da folha',
      'Envio automático no dia 31 de resumo detalhado por e-mail (descontos, horas extras, faltas, etc) para cada funcionário',
      'Tecnologias: Python, Selenium, PyAutoGUI',
      'Benefícios: redução de erros manuais, aumento de eficiência e conformidade trabalhista.'
    ],
  },
  {
    title: 'Cardápio Digital',
    desc: 'Cardápio web responsivo para visualização de produtos de uma confeiteira autônoma. O sistema exibe os itens e preços, mas os pedidos são realizados exclusivamente via WhatsApp, facilitando o contato direto com a confeiteira.',
  },
];

function Project() {
  return (
    <>
      <h2 style={{ textAlign: 'center', color: 'var(--color-primary)', margin: '2rem 0 1.5rem 0', fontWeight: 700, fontSize: '2rem', letterSpacing: '1px' }}>
        Trabalhos Recentes
      </h2>
      <div className="project-cards-container">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-card-title">{proj.title}</div>
            {Array.isArray(proj.desc) ? (
              <div className="project-card-desc">
                <span style={{ display: 'block', marginBottom: 6 }}>{proj.desc[0]}</span>
                <ul style={{ textAlign: 'left', margin: '0.5em 0 0 0', paddingLeft: 18, fontSize: '0.98em' }}>
                  <li><strong>{proj.desc[1]}</strong></li>
                  {proj.desc.slice(2).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="project-card-desc">{proj.desc}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
