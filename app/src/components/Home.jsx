import {LightRays} from './animation/LightRays';
import {InfiniteSlider} from './animation/InfiniteSlider';
import '../css/Home.css';
import '../css/about.css';

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
      <div className="about-container">
        <div className="about-box">
          <div className="circle-image" > 
            <video src="./src/assets/foof.mp4" alt="Profile" loop autoPlay muted playsInline className="circle-video" />
          </div>
          <h2 className='cont'>
              <span>Kaiser</span>
              <span> Developer</span>
            <span className='info'>My name is Alisson de Almeida de Oliveira, I am 23 years old, known as Kaiser. <br />
             I am a responsible, dedicated professional committed to excellence in everything I do.</span>
          </h2>
        </div>
      </div>
      <div className="info-sections-container">
        {/* Home Content */}
        <section className="info-section">
          <h2 className="info-section-title">FullStack Developer | QA | Tester | LLMs </h2>
          <div className="info-section-content">
            <p>
              I am a FullStack Developer with extensive experience in developing robust and scalable APIs, as well as creating modern, intuitive, and responsive interfaces. I am heavily involved in manual and automated testing, focusing on corrective and preventive solutions. I have expertise in integrating LLMs (Large Language Models) and maintain a continuous commitment to quality, security, and technological innovation.
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
                      Creation of robust and scalable APIs for millions of users 
                    </span>
                  </div>
                </div>
                <div className="skill-category">
                  <span className="skill-title">Front-end</span>
                  <div className="badges">
                    <span className="badge">
                      Creation of modern, intuitive, and responsive interfaces
                    </span>
                  </div>
                </div>
                <div className="skill-category">
                  <span className="skill-title">Testing</span>
                  <div className="badges">
                    <span className="badge">
                      Automated and manual testing focusing on corrective and preventive solutions
                    </span>
                  </div>
                </div>
                <div className="skill-category">
                  <span className="skill-title">LLMs</span>
                  <div className="badges">
                    <span className="badge">
                      Integration of LLMs for self-service and performing complex and precise tasks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <InfiniteSlider /> {/* Add the slider here, right after the Skills section */}
      </div>
    </div>
  );
}

export default HomePage;


