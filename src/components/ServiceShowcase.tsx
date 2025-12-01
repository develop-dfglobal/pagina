"use client";

import {
  ShieldCheckIcon,
  SignalIcon,
  ServerStackIcon,
  CloudIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function ServiceShowcase() {
  return (
    <section className="w-full from-oxford to-black text-white py-24 px-6 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center opacity-10" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start gap-16">
        {/* Bloque izquierdo: texto */}
        <div className="flex-1 p-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            SERVICIOS ESTABLES, <span className="text-mint">NEGOCIOS SÓLIDOS</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed space-y-4">
            <span className="block">
              Diseñamos y optimizamos infraestructuras de red de alto rendimiento, seguras y escalables.
            </span>
            <span className="block">
              Implementamos y gestionamos servidores robustos y data centers eficientes.
            </span>
            <span className="block">
              Disponibilidad, rendimiento y respaldo garantizados.
            </span>
          </p>

          {/* Botón CTA */}
          <div className="mt-10">
            <a
              href="#servicios"
              className="inline-block px-8 py-4 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition font-semibold"
            >
              MÁS SERVICIOS
            </a>
          </div>
        </div>

        {/* Bloque derecho: tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 p-6">
          {[
            {
              icon: <ShieldCheckIcon className="h-8 w-8 text-mint" />,
              title: "Ciber Seguridad Avanzada",
              desc: "Protección integral contra amenazas digitales y vulnerabilidades.",
            },
            {
              icon: <SignalIcon className="h-8 w-8 text-mint" />,
              title: "Diseño e Implementación de Redes",
              desc: "Arquitectura de red eficiente, escalable y segura para tu empresa.",
            },
            {
              icon: <ServerStackIcon className="h-8 w-8 text-mint" />,
              title: "Servidores y Data Center",
              desc: "Infraestructura robusta con alta disponibilidad y respaldo garantizado.",
            },
            {
              icon: <CloudIcon className="h-8 w-8 text-mint" />,
              title: "Soluciones Nube Híbridas",
              desc: "Flexibilidad y escalabilidad con integración local y en la nube.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:border-mint transition flex flex-col justify-between shadow-md"
            >
              <div>
                {item.icon}
                <h4 className="text-lg font-semibold text-white mt-4 mb-2">{item.title}</h4>
                <p className="text-base text-gray-400">{item.desc}</p>
              </div>
              <ArrowRightIcon className="h-5 w-5 text-mint mt-6 self-end group-hover:translate-x-1 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}