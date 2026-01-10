import '../css/Contacts.css';

const githubUrl = import.meta.env.VITE_GITHUB_URL;
const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
const discordUrl = import.meta.env.VITE_DISCORD_URL;
const emailUrl = import.meta.env.VITE_EMAIL_URL;
const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL;

export  {Contacts};
function Contacts() {
  return (
    <div className="contacts-container dock-animation">
      <h2 className="contacts-title">
        {"Contact Me".split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </h2>
      <div className="dock-animation">
        <ul className="contacts-list">
          <li className="contact-item">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li className="contact-item">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li className="contact-item">
            <a href={discordUrl} target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </li>
          <li className="contact-item">
            <a href={emailUrl} target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </li>
          <li className="contact-item">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

