// Importar o CSS para estilizar o componente
import "../css/works.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Works() {
  const cardsData = [
    { 
      title: "AtendeZap", 
      description: "Saas de telecomunicação via whatsapp onde de atendimento silmutaneo a varios clientes",
      hoverText: "Atuação como desenvolvedor fullstack e QA, corrigindo falhas críticas para garantir a estabilidade e eficiência da plataforma. Responsável pela implementação de uma solução completa de transcrição de áudio para texto utilizando LLMs da OpenAI, além de aprimorar interfaces frontend e otimizar a performance do backend. Essas melhorias impactaram diretamente a experiência do usuário, tornando a plataforma mais robusta, confiável e inovadora.",
      link: "#",
      hoverVideo: "src/assets/videos/food.mp4"
    },
    { 
      title: "Ecostoque", 
      description: "Saas de controle de estoque logístico",
      hoverText: "SaaS de controle de estoque logístico desenvolvido para maximizar a eficiência operacional e aprimorar a gestão de inventário. Oferece controle detalhado de entradas e saídas, alertas inteligentes de estoque baixo e relatórios personalizados, tudo em uma interface intuitiva. A solução contribui para a otimização de processos, aumento da eficácia na gestão de estoques e redução de custos operacionais.",
      link: "#",
      hoverVideo: "src/assets/videos/eco.mp4"
    },
    { 
      title: "S&A Marmitaria", 
      description: "Delivery de marmitas caseiras",
      hoverText: "Cardápio digital interativo que agiliza o fluxo de pedidos e proporciona uma experiência personalizada ao cliente. Conta com painel administrativo para gestão eficiente dos pedidos e atualização dinâmica do cardápio. A solução impacta diretamente a eficiência operacional, otimiza o atendimento e reduz falhas manuais no processo de pedidos.",
      link: "#",
      hoverVideo: "src/assets/videos/food.mp4"
    },
    { 
      title: "PrisaboresCaseiros", 
      description: "Cardápio digital para Confeitaria",
      hoverText: "Solução de cardápio digital interativo projetada para agilizar pedidos e elevar a experiência do cliente. Dispõe de um painel administrativo robusto para gerenciamento integral de pedidos e atualização dinâmica do catálogo.",
      link: "#",
      hoverVideo: "src/assets/videos/food.mp4"
    },
    { 
      title: "Amigo Oculto", 
      description: "Aplicativo para sorteio de amigo oculto",
      hoverText: "Sistema de sorteio de amigo oculto online que facilita a organização de eventos. Permite criar grupos, adicionar participantes e realizar sorteios de forma rápida e segura, com notificações automáticas por whatsapp.",
      link: "#",
      hoverVideo: "src/assets/videos/food.mp4"
    },
  ];

  const scrollRow = (direction) => {
    const row = document.querySelector(".works-row");
    const cardWidth = row.querySelector(".works-card").offsetWidth + 20; // Largura do card + gap
    const maxScrollLeft = row.scrollWidth - row.clientWidth;

    if (direction === "left") {
      row.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else if (direction === "right") {
      // Se está no último card ou além, volta para o primeiro card imediatamente
      if (row.scrollLeft >= maxScrollLeft - 5) {
        row.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        row.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="works-container">
      <button 
        className="scroll-button works-btn-left" 
        onClick={() => scrollRow("left")}
      >
        <FaChevronLeft />
      </button>
      <div className="works-square">
        <div className="works-row">
          {cardsData.map((card, index) => (
            <div key={index} className="works-card">
              <div className="card-face front">
                <div className="works-title-desc-area">
                  <h2 className="mas">{card.title}</h2>
                  <p className="muf">{card.description}</p>
                </div>
              </div>
              <div className="card-face back">
                <div className="works-hover-grid">
                  <div className="works-hover-link-area">
                    <p className="hover-description">{card.hoverText}</p>
                    <a 
                      href={card.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="works-card-btn"
                    >
                      Ver Projeto
                    </a>
                  </div>
                  <div className="works-hover-video-area">
                    <video
                      className="works-hover-bg-video"
                      src={card.hoverVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button 
        className="scroll-button works-btn-right" 
        onClick={() => scrollRow("right")}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Works;