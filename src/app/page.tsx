import Header from "../components/Headers/Header";
import MediaSlider from "../components/MediaSlider";
import CompanyHighlights from "../components/CompanyHighlights";
import About from "../components/About";
import ServiceShowcase from "../components/ServiceShowcase";
import BrandShowcase from "../components/BrandShowcase";
import ClientTestimonials from "../components/ClientTestimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-white">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-center flex-1 w-full">
        {/* Slider principal */}
        {/* Slider principal */}
        <section id="inicio" className="relative w-full min-h-[60vh] z-10">
          <MediaSlider />
        </section>

        {/* Bloque con fondo fijo */}
        <div className="w-full relative">
          {/* Fondo fijo */}
          <div className="absolute inset-0 -z-10">
            <div className="w-full h-full bg-[url('/bg/bg.jpg')] bg-cover bg-fixed bg-center opacity-5" />
          </div>

          {/* Sección de credibilidad y contacto */}
          <section id="">
            <CompanyHighlights />
          </section>

          {/* Sección sobre-nosotros */}
          <section id="about">
            <About />
          </section>

          {/* Sección de servicios destacados */}
          <section id="servicios">
            <ServiceShowcase />
          </section>

          {/* Sección de marcas */}
          <section id="BrandShowcase">
            <BrandShowcase />
          </section>

          {/* Sección de testimonios */}
          <section id="ClientTestimonials">
            <ClientTestimonials />
          </section>

          {/* Sección de pie de pagina */}
          <section id="Footer">
            <Footer />
          </section>
        </div>
      </main>
    </div>
  );
}