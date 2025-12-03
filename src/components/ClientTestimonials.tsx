"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Carlos Martínez",
    role: "Gerente de sector financiero",
    rating: 5,
    quote: "La experiencia con DF GLOBAL ha sido excepcional..."
  },
  {
    name: "Ana Navarro",
    role: "Gerente de RR. HH. Industria del calzado",
    rating: 5,
    quote: "Contar con el soporte técnico y la consultoría de DF GLOBAL..."
  },
  {
    name: "Jackelin Monroy",
    role: "Gerente de operaciones",
    rating: 5,
    quote: "Con DF GLOBAL implementamos una solución de infraestructura..."
  },
  {
    name: "Luis Fernández",
    role: "Director de TI",
    rating: 5,
    quote: "DF GLOBAL nos ayudó a migrar nuestra infraestructura a la nube con total seguridad."
  },
  {
    name: "María Gómez",
    role: "CEO Startup tecnológica",
    rating: 5,
    quote: "Gracias a DF GLOBAL pudimos escalar rápidamente sin comprometer la seguridad."
  },
  {
    name: "Pedro Sánchez",
    role: "Gerente de logística",
    rating: 5,
    quote: "El soporte de DF GLOBAL ha sido clave para optimizar nuestros procesos internos."
  }
];

export default function ClientTestimonials() {
  return (
    <section className="w-full  text-white py-24 px-6">
      <div className="max-w-screen-xl mx-auto space-y-16">
        
        {/* Bloque superior */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold">
            LO QUE DICEN NUESTROS <span className="text-mint">CLIENTES</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            En DF GLOBAL creemos que el mejor reflejo de nuestro trabajo son las experiencias de quienes confían en nosotros. 
            Estas son algunas opiniones de organizaciones que han fortalecido su seguridad y tecnología con nuestra ayuda.
          </p>
        </div>

        {/* Carrusel de testimonios */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 shadow hover:shadow-lg transition text-left h-full flex flex-col justify-between min-h-[300px]">
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
                <div className="flex gap-1 my-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-mint" />
                  ))}
                </div>
                <p className="text-base text-gray-300 leading-relaxed">{t.quote}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}