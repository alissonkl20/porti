// Import CSS to style the component
import "../css/works.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Works() {
  const cardsData = [
    {
      title: "AtendeZap",
      description: "Telecommunication SaaS via WhatsApp enabling simultaneous customer service for multiple clients.",
      hoverText:
        "Worked as a fullstack developer and QA, fixing critical bugs to ensure platform stability and efficiency. Responsible for implementing a complete audio-to-text transcription solution using OpenAI LLMs, as well as improving frontend interfaces and optimizing backend performance. These enhancements directly impacted user experience, making the platform more robust, reliable, and innovative.",
      link: "https://app.servidoratendezap.click/login",
      hoverVideo: "",
    },
    {
      title: "Ecostoque",
      description: "Logistics inventory control SaaS.",
      hoverText:
        "Logistics inventory control SaaS developed to maximize operational efficiency and improve inventory management. Offers detailed control of entries and exits, smart low-stock alerts, and custom reports, all in an intuitive interface. The solution helps optimize processes, increase inventory management effectiveness, and reduce operational costs.",
      link: "https://flask-food-app.onrender.com",
      hoverVideo: "/videos/eco.mp4",
    },
    {
      title: "S&A Marmitaria",
      description: "Homemade meal delivery service.",
      hoverText:
        "Interactive digital menu that streamlines order flow and provides a personalized customer experience. Features an admin panel for efficient order management and dynamic menu updates. The solution directly impacts operational efficiency, optimizes service, and reduces manual errors in the ordering process.",
      link: "#",
      hoverVideo: "",
    },
    {
      title: "PrisaboresCaseiros",
      description: "Digital menu for a bakery.",
      hoverText:
        "Interactive digital menu solution designed to speed up orders and enhance customer experience. Includes a robust admin panel for comprehensive order management and dynamic catalog updates.",
      link: "https://cardapio-web-five.vercel.app/",
      hoverVideo: "/videos/food.mp4",
    },
    {
      title: "Secret Santa",
      description: "App for Secret Santa draws.",
      hoverText:
        "Online Secret Santa draw system that makes event organization easy. Allows group creation, participant addition, and quick, secure draws with automatic WhatsApp notifications.",
      link: "#",
      hoverVideo: "",
    },
  ];

  const scrollRow = (direction) => {
    const row = document.querySelector(".works-row");
    const cardWidth = row.querySelector(".works-card").offsetWidth + 20; // Card width + gap
    const maxScrollLeft = row.scrollWidth - row.clientWidth;

    if (direction === "left") {
      row.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else if (direction === "right") {
      // If it's at the last card or beyond, go back to the first card immediately
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
                      View Project
                    </a>
                  </div>
                  <div className="works-hover-video-area">
                    <video
                      className="works-hover-bg-video"
                      src={card.hoverVideo || null} // Adiciona fallback para evitar string vazia
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }}
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