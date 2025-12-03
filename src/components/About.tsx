"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="sobre-nosotros"
      className="w-full bg-gradient-to-br from-oxford to-black text-white py-24 px-6 relative overflow-hidden"
    >
      {/* Contenido principal: sobre nosotros + imagen */}
      <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        
        {/* Columna izquierda: título + misión + visión */}
        <div className="space-y-12 flex flex-col justify-center text-left">
          <h2 className="text-4xl font-extrabold uppercase tracking-widest text-white text-center">
            SOBRE NOSOTROS
          </h2>

          {/* Misión */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <span className="flex-grow border-t border-white/40"></span>
              <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                MISIÓN
              </h3>
              <span className="flex-grow border-t border-white/40"></span>
            </div>
            <p className="text-xl text-white leading-relaxed max-w-2xl">
              Proveer soluciones tecnológicas y servicios de consultoría que impulsen la transformación digital
              y el crecimiento de nuestros clientes. Actuamos como un socio estratégico, comprometidos con la eficiencia,
              la innovación y el éxito a largo plazo de sus infraestructuras de TI.
            </p>
          </div>

          {/* Visión */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <span className="flex-grow border-t border-white/40"></span>
              <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                VISIÓN
              </h3>
              <span className="flex-grow border-t border-white/40"></span>
            </div>
            <p className="text-xl text-white leading-relaxed max-w-2xl text-justify">
              Convertirnos en el socio líder e indispensable en la transformación digital, reconocidos por la excelencia,
              la innovación y la calidad de nuestras soluciones. Aspiramos a dejar una huella positiva y duradera en los
              negocios de nuestros clientes, impulsando su éxito a través de la tecnología.
            </p>
          </div>
        </div>

        {/* Columna derecha: imagen corporativa centrada */}
        <div className="flex items-center justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg max-w-lg w-full">
            <Image
              src="/about/about.jpg"
              alt="Imagen corporativa DF Global Consulting"
              width={800}
              height={500}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Bloque de valores */}
      <div className="relative z-10 max-w-screen-xl mx-auto mt-20 space-y-8">
        {/* Título con separadores */}
        <div className="flex items-center justify-center gap-4">
          <span className="flex-grow border-t border-white/40"></span>
          <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
            VALORES
          </h3>
          <span className="flex-grow border-t border-white/40"></span>
        </div>

        {/* Lista alineada a la izquierda */}
        <ul className="space-y-6 text-xl text-white leading-relaxed max-w-5xl mx-auto px-4 text-left">
          <li className="flex items-start gap-3">
            <StarIcon className="h-8 w-8 text-yellow-500 flex-shrink-0" />
            <span><strong>Excelencia:</strong> Buscar la máxima calidad en cada servicio, superando las expectativas del cliente.</span>
          </li>
          <li className="flex items-start gap-3">
            <StarIcon className="h-8 w-8 text-yellow-500 flex-shrink-0" />
            <span><strong>Integridad:</strong> Actuar con honestidad, transparencia y ética profesional.</span>
          </li>
          <li className="flex items-start gap-3">
            <StarIcon className="h-8 w-8 text-yellow-500 flex-shrink-0" />
            <span><strong>Innovación:</strong> Mantenernos a la vanguardia de las tecnologías para ofrecer soluciones creativas y avanzadas.</span>
          </li>
          <li className="flex items-start gap-3">
            <StarIcon className="h-8 w-8 text-yellow-500 flex-shrink-0" />
            <span><strong>Compromiso:</strong> Dedicarnos por completo a los objetivos de nuestros clientes como verdaderos aliados.</span>
          </li>
          <li className="flex items-start gap-3">
            <StarIcon className="h-8 w-8 text-yellow-500 flex-shrink-0" />
            <span><strong>Colaboración:</strong> Fomentar el trabajo en equipo con respeto, comunicación abierta y pasión por crecer juntos.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}