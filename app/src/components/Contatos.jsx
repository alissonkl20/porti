
import { useState } from "react";
import "../css/Skill.css";

const CONTACTS = [
  {
    label: "LinkedIn",
    href: `${import.meta.env.VITE_CONTACT_LINKEDIN_PREFIX || 'https://www.linkedin.com/in/'}${import.meta.env.VITE_CONTACT_LINKEDIN}`,
    color: "#0A66C2",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
      </svg>
    ),
    style: {},
    title: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "GitHub",
    href: `${import.meta.env.VITE_CONTACT_GITHUB_PREFIX || 'https://github.com/'}${import.meta.env.VITE_CONTACT_GITHUB}`,
    color: "#333",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    style: { background: "#fff", borderRadius: 6, padding: "2px 10px" },
    title: "GitHub",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "WhatsApp",
    href: `${import.meta.env.VITE_CONTACT_WHATSAPP_PREFIX || 'https://wa.me/'}${import.meta.env.VITE_CONTACT_WHATSAPP}`,
    color: "#25D366",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.18.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.2 0-.52.07-.8.34-.28.28-1.06 1.04-1.06 2.54 0 1.5 1.09 2.95 1.24 3.16.15.21 2.15 3.29 5.23 4.48.73.25 1.3.4 1.75.51.74.19 1.41.16 1.94.1.59-.07 1.81-.74 2.07-1.46.26-.72.26-1.34.18-1.46-.08-.12-.26-.19-.54-.33z" />
      </svg>
    ),
    style: {},
    title: "WhatsApp",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

function Contatos() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // null | 'enviando' | 'sucesso' | 'erro'


  // Centralize rotas e endpoints sensíveis
  const API = {
    SEND_EMAIL: import.meta.env.VITE_API_SEND_EMAIL || "/api/send-email",
  };

  // Função para enviar mensagem de contato
  async function sendContactMessage({ name, email, message }) {
    const response = await fetch(API.SEND_EMAIL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    return response;
  }

  // Handler do formulário, encapsulando lógica de segurança
  async function handleSubmit(e) {
    e.preventDefault();
    const honeypot = e.target.elements["website"].value;
    if (honeypot) {
      alert("Bloqueado por segurança.");
      return false;
    }
    setStatus("enviando");
    try {
      const res = await sendContactMessage({ name, email, message });
      if (res.ok) {
        setStatus("sucesso");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("erro");
      }
    } catch {
      setStatus("erro");
    }
  }

  return (
    <div
      className="skills-container"
      style={{ maxWidth: 500, margin: "3rem auto" }}
    >
      <h2>Contato</h2>
      <form
        className="contato-form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Seu nome"
          required
          style={{
            padding: 10,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          required
          style={{
            padding: 10,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Sua mensagem"
          rows={4}
          required
          style={{
            padding: 10,
            borderRadius: 8,
            border: "1px solid #ccc",
            resize: "vertical",
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="text"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          style={{ display: "none" }}
          aria-hidden="true"
        />
        <button
          type="submit"
          style={{
            background: "var(--color-primary)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "10px 0",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
          }}
          disabled={status === "enviando"}
        >
          {status === "enviando" ? "Enviando..." : "Enviar"}
        </button>
        {status === "sucesso" && (
          <span style={{ color: "green", marginTop: 8 }}>
            Mensagem enviada com sucesso!
          </span>
        )}
        {status === "erro" && (
          <span style={{ color: "red", marginTop: 8 }}>
            Erro ao enviar. Tente novamente.
          </span>
        )}
      </form>
      <div
        style={{
          marginTop: 32,
          textAlign: "center",
          opacity: 0.8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <p>Ou entre em contato pelas redes:</p>
        <div
          style={{
            display: "flex",
            gap: 18,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {CONTACTS.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              style={{
                color: contact.color,
                display: "flex",
                alignItems: "center",
                gap: 6,
                ...contact.style,
              }}
              title={contact.title}
              target={contact.target}
              rel={contact.rel}
            >
              {contact.icon}
              {contact.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contatos;
