"use client";

import { useState } from "react";
import Image from "next/image";

type Brand = {
  name: string;
  logo: string;
  description: string;
};

const partnerBrands: Brand[] = [
  { name: "Fortinet", logo: "/marcas/fortinet.png", description: "Fortinet ofrece soluciones avanzadas de ciberseguridad para proteger redes, usuarios y datos." },
  { name: "Cisco", logo: "/marcas/cisco.png", description: "Cisco lidera en redes, colaboración, seguridad y soluciones empresariales escalables." },
  { name: "HPE", logo: "/marcas/hpe.png", description: "Hewlett Packard Enterprise proporciona infraestructura de TI híbrida, servidores y soluciones empresariales." },
  { name: "Dell Technologies", logo: "/marcas/dell.png", description: "Dell impulsa la transformación digital con hardware, almacenamiento, servidores y servicios en la nube." },
  { name: "Aruba", logo: "/marcas/aruba.png", description: "Aruba Networks ofrece soluciones de conectividad inalámbrica y gestión de redes seguras." },
  { name: "IBM", logo: "/marcas/ibm.png", description: "IBM brinda soluciones de nube híbrida, inteligencia artificial y servicios de consultoría empresarial." },
];

const otherBrands: Brand[] = [
  { name: "PRT", logo: "/marcas/prt.png", description: "PRT ofrece soluciones tecnológicas adaptadas a diferentes entornos empresariales." },
  { name: "VMware", logo: "/marcas/vmware.png", description: "VMware es líder en virtualización y soluciones de infraestructura de nube." },
  { name: "QNAP", logo: "/marcas/qnap.png", description: "QNAP desarrolla soluciones de almacenamiento en red (NAS) y gestión de datos." },
  { name: "Citrix", logo: "/marcas/citrix.png", description: "Citrix ofrece soluciones de virtualización de aplicaciones y escritorios." },
  { name: "Oracle", logo: "/marcas/oracle.png", description: "Oracle proporciona bases de datos, aplicaciones empresariales y soluciones de nube." },
  { name: "Nutanix", logo: "/marcas/nutanix.png", description: "Nutanix ofrece infraestructura hiperconvergente y soluciones de nube híbrida." },
  { name: "Mikrotik", logo: "/marcas/mikrotik.png", description: "Mikrotik desarrolla routers y soluciones de conectividad de red." },
  { name: "Ubiquiti", logo: "/marcas/ubiquiti.png", description: "Ubiquiti desarrolla soluciones de conectividad inalámbrica para redes empresariales y domésticas." },
];

export default function BrandShowcase() {
  const [activeBrand, setActiveBrand] = useState<Brand | null>(null);

  return (
    <section className="relative w-full bg-[#EEFCF8] text-oxford py-14 px-6 overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto text-center space-y-16">
        
        {/* Slogan */}
        <h2 className="text-4xl font-extrabold uppercase tracking-widest text-prussian">
          TRABAJAMOS DE LA MANO CON LAS MEJORES MARCAS
        </h2>

        {/* Texto corporativo */}
        <p className="max-w-3xl mx-auto text-xl font-bold text-gray-700 leading-relaxed">
          Nuestra meta principal es atender a nuestro cliente de una manera integral,
          encontrando en un solo proveedor todos los especialistas calificados para
          atender sus necesidades.
        </p>

        {/* Bloque de partners */}
        <div className="space-y-8">
          <h3 className="text-3xl font-extrabold uppercase tracking-widest text-prussian">
            SOMOS PARTNERS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBrands.map((brand, idx) => (
              <button
                key={idx}
                onClick={() => setActiveBrand(brand)}
                className="group border-2 border-mint rounded-xl p-8 bg-white hover:bg-mint/10 transition shadow hover:shadow-xl"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={350}
                  height={80}
                  className="mx-auto object-contain group-hover:scale-105 transition-transform"
                />
                <p className="mt-4 text-oxford font-semibold">{brand.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Bloque de otras marcas */}
        <div className="space-y-8">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-prussian">
                TAMBIÉN TRABAJAMOS CON ESTAS MARCAS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherBrands.map((brand, idx) => (
                <button
                    key={idx}
                    onClick={() => setActiveBrand(brand)}
                    className="group border-2 border-oxford rounded-xl p-8 bg-white hover:bg-oxford/10 transition shadow hover:shadow-xl"
                >
                    <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={350}
                    height={80}
                    className="mx-auto object-contain group-hover:scale-105 transition-transform"
                    />
                    <p className="mt-4 text-oxford font-semibold">{brand.name}</p>
                </button>
                ))}
            </div>
        </div>
      </div>

      {/* Modal */}
      {activeBrand && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-6 animate-fadeIn">
          <div className="bg-white text-oxford border border-mint rounded-xl p-12 max-w-2xl text-center space-y-8 shadow-2xl animate-scaleIn">
            <Image
              src={activeBrand.logo}
              alt={activeBrand.name}
              width={200}
              height={100}
              className="mx-auto object-contain"
            />
            <h3 className="text-2xl font-bold">{activeBrand.name}</h3>
            <p className="text-xl text-gray-700 leading-relaxed">{activeBrand.description}</p>
            <button
              onClick={() => setActiveBrand(null)}
              className="mt-6 px-8 py-3 rounded-full border-2 border-mint bg-oxford text-white hover:bg-white hover:text-oxford transition font-semibold"
            >
              CERRAR
            </button>
          </div>
        </div>
      )}
    </section>
  );
}