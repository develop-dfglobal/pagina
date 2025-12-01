"use client";

import { useState } from "react";
import Image from "next/image";

type Brand = {
  name: string;
  logo: string;
  description: string;
};

const brands: Brand[] = [
  {
    name: "Fortinet",
    logo: "/marcas/fortinet.png",
    description:
      "Fortinet ofrece soluciones avanzadas de ciberseguridad para proteger redes, usuarios y datos.",
  },
  {
    name: "HPE",
    logo: "/marcas/hpe.png",
    description:
      "Hewlett Packard Enterprise proporciona infraestructura de TI híbrida, servidores y soluciones empresariales.",
  },
  {
    name: "Dell Technologies",
    logo: "/marcas/dell.png",
    description:
      "Dell impulsa la transformación digital con hardware, almacenamiento, servidores y servicios en la nube.",
  },
  {
    name: "Cisco",
    logo: "/marcas/cisco.png",
    description:
      "Cisco lidera en redes, colaboración, seguridad y soluciones empresariales escalables.",
  },
  {
    name: "Ubiquiti",
    logo: "/marcas/ubiquiti.png",
    description:
      "Ubiquiti desarrolla soluciones de conectividad inalámbrica para redes empresariales y domésticas.",
  },
  {
    name: "Ruckus (CommScope)",
    logo: "/marcas/ruckus.png",
    description:
      "Ruckus ofrece soluciones de red Wi-Fi de alto rendimiento bajo la marca CommScope.",
  },
];

export default function BrandShowcase() {
  const [activeBrand, setActiveBrand] = useState<Brand | null>(null);

  return (
    <section className="w-full bg-oxford text-white py-24 px-6">
      <div className="max-w-screen-xl mx-auto text-center space-y-10">
        <h2 className="text-3xl font-bold">
          DE LA MANO CON <span className="text-mint">LAS MEJORES MARCAS</span>
        </h2>

        {/* Grid de marcas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, idx) => (
            <button
              key={idx}
              onClick={() => setActiveBrand(brand)}
              className="group bg-white rounded-xl p-8 hover:bg-white/10 transition shadow hover:shadow-xl"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={350}
                height={80}
                className="mx-auto object-contain group-hover:scale-105 transition-transform"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeBrand && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-6 animate-fadeIn">
          <div className="bg-white text-oxford border border-white/20 rounded-xl p-12 max-w-2xl text-center space-y-8 shadow-2xl animate-scaleIn">
            <Image
              src={activeBrand.logo}
              alt={activeBrand.name}
              width={200}
              height={100}
              className="mx-auto object-contain"
            />
            <h3 className="text-2xl font-bold">{activeBrand.name}</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              {activeBrand.description}
            </p>
            <button
              onClick={() => setActiveBrand(null)}
              className="mt-6 px-8 py-3 rounded-full border bg-oxford text-white hover:bg-white hover:text-oxford transition font-semibold"
            >
              CERRAR
            </button>
          </div>
        </div>
      )}
    </section>
  );
}