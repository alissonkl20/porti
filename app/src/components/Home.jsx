
import InfoSection from "./InfoSection";

function Home() {
  return (
    <div>
      <InfoSection title="FullStack Developer | QA | Tester | LLMs | Pentester">
        <p>
          Sou Desenvolvedor FullStack com ampla experiência no desenvolvimento de APIs robustas e escaláveis, além da criação de interfaces modernas, intuitivas e responsivas. Atuo fortemente em testes manuais e automatizados, com foco em soluções corretivas e preventivas. Tenho expertise em integração de LLMs (Large Language Models) e mantenho um compromisso contínuo com qualidade, segurança e inovação tecnológica.
        </p>
      </InfoSection>
      <InfoSection title="Skills">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', width: '100%' }}>
          <div style={{ minWidth: 180, textAlign: 'center' }}>
            <span style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>Back-end</span><br />
            <span className="badge">TypeScript</span>
            <span className="badge">Node.js</span>
            <span className="badge">Flask</span>
          </div>
          <div style={{ minWidth: 180, textAlign: 'center' }}>
            <span style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>Front-end</span><br />
            <span className="badge">React</span>
            <span className="badge">Next.js</span>
            <span className="badge">HTML</span>
            <span className="badge">CSS</span>
          </div>
          <div style={{ minWidth: 180, textAlign: 'center' }}>
            <span style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>DevOps</span><br />
            <span className="badge">Docker</span>
          </div>
          <div style={{ minWidth: 180, textAlign: 'center' }}>
            <span style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>Testes</span><br />
            <span className="badge">Jest</span>
            <span className="badge">Cypress</span>
          </div>
          <div style={{ minWidth: 180, textAlign: 'center' }}>
            <span style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>LLMs</span><br />
            <span className="badge">OpenAI</span>
          </div>
        </div>
      </InfoSection>
    </div>
  );
}

export default Home;
