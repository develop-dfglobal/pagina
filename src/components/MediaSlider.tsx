"use client";

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type MediaItem = {
  type: "image";
  src: string;
  alt?: string;
};

const mediaItems: MediaItem[] = [
  { type: "image", src: "/slider/slider.jpg", alt: "Banner corporativo" },
  { type: "image", src: "/slider/slider2.jpg", alt: "Banner corporativo 2" },
];

export default function MediaSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % mediaItems.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[750px] overflow-hidden bg-black">
      {mediaItems.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out
            ${index === current ? "opacity-100 scale-100 z-0" : "opacity-0 scale-105 z-0"}`}
        >
          <img src={item.src} alt={item.alt || ""} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlay fijo con texto corporativo */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end px-6 lg:pr-16 z-20">
        <div className="bg-black/50 p-6 lg:p-8 rounded-lg max-w-md text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            PROTEGE LO QUE MÁS TE IMPORTA, <span className="text-mint">TU INFORMACIÓN</span>
          </h2>
          <p className="mb-6 text-xl leading-relaxed">
            Soluciones avanzadas de ciberseguridad para blindar los datos críticos de tu empresa.<br />
            Monitoreo 24/7, auditorías y estrategias de defensa adaptadas a tus necesidades.
          </p>
          <a
            href="#conocenos"
            className="px-5 py-2 lg:px-6 lg:py-3 rounded-full  bg-oxford text-white hover:bg-mint hover:text-oxford transition font-semibold inline-block"
          >
            CONÓCENOS
          </a>
        </div>
      </div>

      {/* Flechas con fondo mint y color oxford */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-mint hover:bg-mint/80 text-oxford p-2 rounded-full z-30 transition"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-mint hover:bg-mint/80 text-oxford p-2 rounded-full z-30 transition"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}