import '../css/Project.css';

const projects = [
  {
    title: 'Atendezap',
    desc: [
      'I worked as a freelance Full Stack Developer, delivering the audio transcription module, fixing bugs, and optimizing performance.',
      'Impacts:',
      '10% increase in system response time.',
      '25% improvement in user experience.',
      'prevention of future failures.',
      '100ms increase in interface rendering speed.',
    ],
  },
  {
    title: 'Ecostoque',
    desc: [
      'Development of an inventory management SaaS focused on small and medium-sized businesses, using React, Flask, and PostgreSQL. The system aims to optimize inventory control, reduce losses, and improve operational efficiency.',
      'Impacts:',
      'increased agility and efficiency in inventory control.',
      '40% improvement in inventory accuracy.',
      '20% reduction in manual reviews.',
      '10% increase in customer satisfaction.'
    ],
  },
  {
    title: 'QA and Tester',
    desc: [
      'I worked as a freelance Full Stack Developer on a SaaS self-service platform via WhatsApp. Main deliveries: manual and stress testing, code review and refactoring, UI/UX and responsiveness improvements, security testing (sec tester).',
      'Impacts:',
      '20% improvement in user experience.',
      '10% improvement in overall application security.',
      '15% improvement in performance under load.',
      '25% increase in interface information visibility.'
    ],
  },
  {
    title: 'Automated Tests',
    desc: [
      'I developed a script to run tests on an automated e-commerce platform using Python and PyAutoGUI, simulating a real user to identify bugs and usability issues.',
      'Impacts:',
      '+25% in early error detection.',
      '+20% in testing efficiency.',
      '+45% in user experience coverage.'
    ],
  },
  {
    title: 'Digital Menu',
    desc: 'Responsive web menu for displaying products of a self-employed confectioner. The system displays items and prices, but orders are made exclusively via WhatsApp, facilitating direct contact with the confectioner.',
  },
];

function Project() {
  return (
    <>
      <h2 style={{ textAlign: 'center', color: 'var(--color-pink1)', margin: '2rem 0 1.5rem 0', fontWeight: 700, fontSize: '2rem', letterSpacing: '1px' }}>
        Recent Works
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
