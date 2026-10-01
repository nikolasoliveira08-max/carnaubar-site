import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Experiencias from "./components/Experiencias.jsx";
import Almoco from "./components/Almoco.jsx";
import HappyHour from "./components/HappyHour.jsx";
import Aniversarios from "./components/Aniversarios.jsx";
import Eventos from "./components/Eventos.jsx";
import Espacos from "./components/Espacos.jsx";
import TourVirtual from "./components/TourVirtual.jsx";
import Comidas from "./components/Comidas.jsx";
import Drinks from "./components/Drinks.jsx";
import Galeria from "./components/Galeria.jsx";
import CtaFinal from "./components/CtaFinal.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import MobileBar from "./components/MobileBar.jsx";

export default function App() {
  return (
    <div className="pb-16 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Experiencias />
        <Almoco />
        <HappyHour />
        <Aniversarios />
        <Eventos />
        <Espacos />
        <TourVirtual />
        <Comidas />
        <Drinks />
        <Galeria />
        <CtaFinal />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBar />
    </div>
  );
}
