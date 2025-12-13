import React from "react";
import "../css/InfoSection.css";

const InfoSection = ({ children, title }) => (
  <section className="info-section">
    {title && <h2 className="info-section-title">{title}</h2>}
    <div className="info-section-content">
      {children}
    </div>
  </section>
);

export default InfoSection;
