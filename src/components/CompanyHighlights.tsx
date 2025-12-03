"use client";

import Image from "next/image";
import { ShieldCheckIcon, BuildingOfficeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function CompanyHighlights() {
  return (
    <section className="w-full text-white pt-32 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Columna izquierda */}
        <div className="space-y-8">
          {/* Imagen principal */}
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/experiencia/experiencia2.jpg"
              alt="Trabajo colaborativo adicional"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* Tarjetas en línea */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Equipo Certificado */}
            <div className="flex items-start gap-4 flex-1">
              <div className="border border-mint/30 rounded-full p-3 bg-mint/10">
                <ShieldCheckIcon className="h-8 w-8 text-mint" />
              </div>
              <div>
                <h6 className="text-white font-semibold text-base mb-1">Equipo Certificado</h6>
                <p className="text-sm text-gray-200">
                  Contamos con Personal 100% Certificado para impulsar tu plataforma.
                </p>
              </div>
            </div>

            {/* Compañía Confiable */}
            <div className="flex items-start gap-4 flex-1">
              <div className="border border-mint/30 rounded-full p-3 bg-mint/10">
                <BuildingOfficeIcon className="h-8 w-8 text-mint" />
              </div>
              <div>
                <h6 className="text-white font-semibold text-base mb-1">Compañía Confiable</h6>
                <p className="text-sm text-gray-200">
                  Integramos soluciones innovadoras para proteger y optimizar tu negocio.<br />
                  El futuro de tu empresa comienza hoy.
                </p>
              </div>
            </div>
          </div>

          {/* Botón */}
          <div>
            <a
              href="#conocenos"
              className="inline-block px-8 py-4 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition font-semibold"
            >
              CONOCE MÁS
            </a>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white">
              EXPERTOS <span className="text-mint">A TU LADO</span>
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-gray-200">
              Acompañamos a tu empresa en cada etapa: planificación, implementación y soporte.<br />
              Confianza y experiencia en cada proyecto.
            </p>
          </div>

          {/* Imagen experiencia */}
          <div className="relative rounded-xl overflow-hidden min-h-[340px]">
            <Image
              src="/experiencia/experiencia.jpg"
              alt="Presentación corporativa"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute bottom-0 right-0 bg-mint text-oxford rounded-tl-xl px-6 py-4 w-48 text-center shadow-lg">
              <h2 className="text-3xl font-bold">25</h2>
              <p className="text-sm font-semibold">AÑOS DE EXPERIENCIA</p>
            </div>
          </div>
        </div>
      </div>

{/* Bloque final: consulta gratuita */}
<div className="m-20">
  <div className="max-w-screen-xl mx-auto bg-black/80 rounded-2xl px-8 py-10 lg:px-16 lg:py-14 flex flex-col lg:flex-row items-center text-white shadow-xl">
    {/* Izquierda: ícono + texto + número */}
    <div className="flex items-center gap-4 lg:w-1/2 lg:pr-8">
      <div className="bg-mint text-oxford rounded-full p-3">
        <PhoneIcon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg lg:text-xl font-bold text-white">OBTÉN UNA CONSULTA GRATUITA</h3>
        <p className="text-mint text-lg lg:text-xl font-bold">(0414) 200-5820</p>
      </div>
    </div>

    {/* Línea divisoria */}
    <div className="hidden lg:block h-20 border-l border-white/30 mx-6"></div>

    {/* Derecha: mensaje + botón */}
    <div className="flex flex-col lg:flex-row items-center gap-6 text-center lg:text-left lg:w-1/2 lg:pl-8">
      <p className="text-sm lg:text-base text-gray-200 leading-relaxed">
        Integramos soluciones innovadoras para proteger y optimizar tu negocio.<br />
        El futuro de tu empresa comienza hoy.
      </p>
      <a
        href="https://wa.me/584142005820?text=Hola%2C%20quiero%20una%20consulta%20gratuita%20para%20mi%20empresa"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition font-semibold"
      >
        ESCRÍBENOS
      </a>
    </div>
  </div>
</div>
    </section>
  );
}