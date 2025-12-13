
import InfoSection from "./InfoSection";
import AnimatedBg from "./AnimatedBg";

function About() {
  return (
    <div style={{ position: 'relative', minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <AnimatedBg />
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <InfoSection title="Sobre mim">
          <p style={{ fontSize: '1.3rem', textAlign: 'center', margin: 0 }}>
            Meu nome é Alisson de Almeida de Oliveira, tenho 23 anos e possuo mais de 6 anos de conhecimento em Tecnologia da Informação, com forte base em hardware e software, embora sem atuação formal na área nesse período. Nos últimos 2 anos, adquiri experiência prática como desenvolvedor FullStack, ampliando minha expertise em soluções inovadoras. Sou apaixonado por tecnologia e movido pela curiosidade de entender como as coisas funcionam, o que me impulsiona a buscar constante aprimoramento e aprofundamento profissional.
          </p>
        </InfoSection>
      </div>
    </div>
  );
}

export default About;
