import InfoSection from "./InfoSection";

function About() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Removido o <AnimatedBg /> */}
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <InfoSection title="Sobre mim">
          <p style={{ fontSize: "1.3rem", textAlign: "center", margin: 0 }}>
            Dese
          </p>
        </InfoSection>
      </div>
    </div>
  );
}

export default About;
