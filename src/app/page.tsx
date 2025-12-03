import Header from "../components/Header";
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
        <MediaSlider />

        {/* Bloque con fondo fijo */}
        <div className="w-full relative">
          {/* Fondo fijo */}
          <div className="absolute inset-0 -z-10">
            <div className="w-full h-full bg-[url('/bg/bg.jpg')] bg-cover bg-fixed bg-center opacity-5" />
          </div>

          {/* Sección de credibilidad y contacto */}
          <CompanyHighlights />

          {/* Sección sobre-nosotros */}
          <About />

          {/* Sección de servicios destacados */}
          <ServiceShowcase />

          {/* Sección de marcas */}
          <BrandShowcase />

          {/* Sección de testimonios */}
          <ClientTestimonials />

          {/* Sección de pie de pagina */}
          <Footer />
        </div>
      </main>
    </div>
  );
}