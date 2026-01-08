import InfoSection from "./InfoSection";
import LightRays from './LightRays';
import '../css/home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="light-rays-container full-screen">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffffff"
          raysSpeed={2.5} // Velocidade dos raios
          lightSpread={3.8} // Espalhamento da luz
          rayLength={2.2} // Comprimento dos raios
          followMouse={true} // Seguir o mouse
          mouseInfluence={0.1} // Influência do mouse
          noiseAmount={0.1} // Quantidade de ruído
          distortion={0.05} // Distorção
          className="custom-rays"
        />
      </div>
      <div className="info-sections-container">
        <InfoSection title="FullStack Developer | QA | Tester | LLMs | Pentester">
          <p>
            Sou Desenvolvedor FullStack com ampla experiência no desenvolvimento de APIs robustas e escaláveis, além da criação de interfaces modernas, intuitivas e responsivas. Atuo fortemente em testes manuais e automatizados, com foco em soluções corretivas e preventivas. Tenho expertise em integração de LLMs (Large Language Models) e mantenho um compromisso contínuo com qualidade, segurança e inovação tecnológica.
          </p>
        </InfoSection>
        <InfoSection title="Skills">
          <div className="skills-card">
            <div className="skills-container">
              <div className="skill-category">
                <span className="skill-title">Back-end</span>
                <div className="badges">
                  <span className="badge">TypeScript</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">Flask</span>
                </div>
              </div>
              <div className="skill-category">
                <span className="skill-title">Front-end</span>
                <div className="badges">
                  <span className="badge">React</span>
                  <span className="badge">Next.js</span>
                  <span className="badge">HTML</span>
                  <span className="badge">CSS</span>
                </div>
              </div>
              <div className="skill-category">
                <span className="skill-title">DevOps</span>
                <div className="badges">
                  <span className="badge">Docker</span>
                </div>
              </div>
              <div className="skill-category">
                <span className="skill-title">Testes</span>
                <div className="badges">
                  <span className="badge">Jest</span>
                  <span className="badge">Cypress</span>
                </div>
              </div>
              <div className="skill-category">
                <span className="skill-title">LLMs</span>
                <div className="badges">
                  <span className="badge">OpenAI</span>
                </div>
              </div>
            </div>
          </div>
        </InfoSection>
      </div>
    </div>
  );
}

export default Home;
