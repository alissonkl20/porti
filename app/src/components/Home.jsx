import LightRays from './/animation/LightRays';
import InfiniteSlider from './animation/InfiniteSlider';
import '../css/home.css';



function HomePage() {
  return (
    <div className="home-container">
      <div className="light-rays-container full-screen">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffffff"
          raysSpeed={2.5}
          lightSpread={3.8}
          rayLength={2.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="info-sections-container">
        {/* Conteúdo do Home */}
        <section className="info-section">
          <h2 className="info-section-title">FullStack Developer | QA | Tester | LLMs | Pentester</h2>
          <div className="info-section-content">
            <p>
              Sou Desenvolvedor FullStack com ampla experiência no desenvolvimento de APIs robustas e escaláveis, além da criação de interfaces modernas, intuitivas e responsivas. Atuo fortemente em testes manuais e automatizados, com foco em soluções corretivas e preventivas. Tenho expertise em integração de LLMs (Large Language Models) e mantenho um compromisso contínuo com qualidade, segurança e inovação tecnológica.
            </p>
          </div>
        </section>
        <section className="info-section info-section-skills">
          <h2 className="info-section-title">Skills</h2>
          <div className="info-section-content">
            <div className="skills-card">
              <div className="skills-container">
                <div className="skill-category">
                  <span className="skill-title">Back-end</span>
                  <div className="badges">
                    <span className="badge">
                      Criação de APIs robustas e escaláveis para milhões e milhares de usuários
                    </span>
                  </div>
                </div>
                <div className="skill-category">
                  <span className="skill-title">Front-end</span>
                  <div className="badges">
                    <span className="badge">
                      Criações de interfaces modernas, intuitivas e responsivas
                    </span>
                  </div>
                </div>
                <div className="skill-category">
                  <span className="skill-title">Testes</span>
                  <div className="badges">
                    <span className="badge">
                      Testes automatizados e manuais com foco em soluções corretivas e preventivas
                    </span>
                  </div>
                </div>
                <div className="skill-category">
                  <span className="skill-title">LLMs</span>
                  <div className="badges">
                    <span className="badge">
                      Integração de LLMs para autoatendimento e realização de tarefas complexas e precisas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <InfiniteSlider /> {/* Adicione o slider aqui, logo após a seção Skills */}
      </div>
    </div>
  );
}

export default HomePage;
