"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Headers/Header";
import MediaSlider from "../components/MediaSlider";
import CompanyHighlights from "../components/CompanyHighlights";
import About from "../components/About";
import ServiceShowcase from "../components/ServiceShowcase";
import BrandShowcase from "../components/BrandShowcase";
import ClientTestimonials from "../components/ClientTestimonials";
import Footer from "../components/Footer";
import { ContactModal } from "../components/ContactModal";
import { FaArrowUp } from "react-icons/fa"; // << icono flecha

export default function Page() {
  const [contactOpen, setContactOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Detectar scroll en desktop y móvil
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col text-white">
      {/* Header recibe la función para abrir el modal */}
      <Header openContactModal={() => setContactOpen(true)} />

      <main className="flex flex-col items-center w-full">
        <section id="inicio" className="relative w-full min-h-[60vh] z-10">
          <MediaSlider />
        </section>

        <div className="w-full relative">
          <div className="absolute inset-0 -z-10">
            <div className="w-full h-full bg-[url('/bg/bg.jpg')] bg-cover bg-fixed bg-center opacity-5" />
          </div>

          <section>
            <CompanyHighlights />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="servicios">
            <ServiceShowcase />
          </section>

          <section id="marcas">
            <BrandShowcase />
          </section>

          {/* <section id="ClientTestimonials">
            <ClientTestimonials />
          </section> */}

          <section id="footer" className="scroll-mt-24">
            <Footer />
          </section>

          <span id="page-end" className="block h-0" />
        </div>
      </main>

      {/* Modal global */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Botón flotante para subir (solo visible tras scroll) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-mint text-oxford p-3 rounded-full shadow-lg hover:bg-mint/80 hover:text-white transition-opacity duration-300 z-[9999]"
          aria-label="Subir al inicio"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}