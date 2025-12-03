"use client";

import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Carlos Martínez",
    role: "Gerente de sector financiero",
    rating: 5,
    quote:
      "La experiencia con DF GLOBAL ha sido excepcional. Gracias a sus soluciones de seguridad, logramos blindar nuestros sistemas contra amenazas cibernéticas. Su soporte técnico es sobresaliente y siempre está disponible.",
  },
  {
    name: "Ana Navarro",
    role: "Gerente de RR. HH. Industria del calzado",
    rating: 5,
    quote:
      "Contar con el soporte técnico y la consultoría de DF GLOBAL nos ha permitido crecer de forma segura y confiable. Además, su servicio es muy personalizado y se adapta a nuestras necesidades.",
  },
  {
    name: "Jackelin Monroy",
    role: "Gerente de operaciones",
    rating: 5,
    quote:
      "Con DF GLOBAL implementamos una solución de infraestructura y soporte que ha transformado la manera en que operamos. Su asesoría fue clave para el éxito del proyecto.",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="w-full bg-gradient-to-br from-black to-oxford text-white py-24 px-6">
      <div className="max-w-screen-xl mx-auto space-y-16">
        {/* Bloque superior: título + descripción en línea */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <h2 className="text-3xl font-bold">
            LO QUE DICEN NUESTROS <span className="text-mint">CLIENTES</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            En DF GLOBAL creemos que el mejor reflejo de nuestro trabajo son las experiencias de quienes confían en nosotros. Estas son algunas opiniones de organizaciones que han fortalecido su seguridad y tecnología con nuestra ayuda.
          </p>
        </div>

        {/* Testimonios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl p-8 shadow hover:shadow-lg transition space-y-4 text-left"
            >
              <div>
                <h4 className="text-white font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-mint" />
                ))}
              </div>
              <p className="text-base text-gray-300 leading-relaxed">{t.quote}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}