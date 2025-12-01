"use client";

import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="w-full text-white font-satoshi relative z-50">
      {/* TopBar */}
      <div className="hidden lg:block text-sm bg-oxford">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="py-4 flex flex-row items-center justify-between border-b border-gray-600">
            <div className="flex flex-row items-center gap-8 font-bold tracking-wide text-sm">
              <span className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-mint" /> +58 414 2005820
              </span>
              <span className="flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-mint" /> Info@dfglobal.com.ve
              </span>
              <span className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-mint" /> Torre Domus, Piso 10, Plaza Venezuela, Distrito Capital
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-8 w-8 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition-transform transform hover:scale-110"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-8 w-8 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition-transform transform hover:scale-110"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-8 w-8 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition-transform transform hover:scale-110"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bloque principal */}
      <div className="bg-oxford">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-row items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logos/COLOR_1.png"
              alt="DF Global Consulting Logo"
              width={160}
              height={40}
              priority
              className="h-auto w-auto max-h-12 md:max-h-14 lg:max-h-16"
            />
          </div>

          {/* Menú escritorio */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide pb-3">
            <a href="#inicio" className="hover:text-mint transition-colors">
              INICIO
            </a>
            <a href="#nosotros" className="hover:text-mint transition-colors">
              NOSOTROS
            </a>

            {/* SERVICIOS */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("servicios")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-mint transition-colors">
                SERVICIOS <ChevronDownIcon className="h-4 w-4 text-mint" />
              </button>

              {/* Hover bridge */}
              <div className="absolute left-0 top-full h-2 w-full" />

              <div
                className={`absolute left-0 top-[calc(100%+8px)] bg-white rounded-md shadow-lg z-50 min-w-[220px] text-black py-3 px-4 transform transition-all duration-300 ease-out ${
                  activeMenu === "servicios"
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <a href="#servicio1" className="block py-2 hover:text-oxford border-b border-gray-200">
                  Servicio 1
                </a>
                <a href="#servicio2" className="block py-2 hover:text-oxford border-b border-gray-200">
                  Servicio 2
                </a>
                <a href="#servicio3" className="block py-2 hover:text-oxford">
                  Servicio 3
                </a>
              </div>
            </div>

            {/* MARCAS */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("marcas")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-mint transition-colors">
                MARCAS <ChevronDownIcon className="h-4 w-4 text-mint" />
              </button>

              {/* Hover bridge */}
              <div className="absolute left-0 top-full h-2 w-full" />

              <div
                className={`absolute left-0 top-[calc(100%+8px)] bg-white rounded-md shadow-lg z-50 min-w-[220px] text-black py-3 px-4 transform transition-all duration-300 ease-out ${
                  activeMenu === "marcas"
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <a href="#marca1" className="block py-2 hover:text-oxford border-b border-gray-200">
                  Marca 1
                </a>
                <a href="#marca2" className="block py-2 hover:text-oxford border-b border-gray-200">
                  Marca 2
                </a>
                <a href="#marca3" className="block py-2 hover:text-oxford">
                  Marca 3
                </a>
              </div>
            </div>

            <a href="#contacto" className="hover:text-mint transition-colors">
              CONTACTO
            </a>

            {/* Botón CONÓCENOS outline mint */}
            <a
              href="#conocenos"
              className="px-4 py-2 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition font-semibold"
            >
              CONÓCENOS
            </a>
          </nav>

          {/* Botón hamburguesa móvil */}
          <div className="flex lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              {menuOpen ? <XMarkIcon className="h-6 w-6 text-mint" /> : <Bars3Icon className="h-6 w-6 text-mint" />}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {menuOpen && (
          <nav className="lg:hidden bg-oxford text-white flex flex-col gap-4 p-6 z-50">
            <a href="#inicio" className="hover:text-mint transition-colors">
              INICIO
            </a>
            <a href="#nosotros" className="hover:text-mint transition-colors">
              NOSOTROS
            </a>

            {/* SERVICIOS móvil */}
            <div>
              <button
                onClick={() => setActiveMenu(activeMenu === "servicios" ? null : "servicios")}
                className="flex items-center gap-1 hover:text-mint transition-colors"
              >
                SERVICIOS <ChevronDownIcon className="h-4 w-4 text-mint" />
              </button>
              {activeMenu === "servicios" && (
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  <a href="#servicio1" className="hover:text-oxford">
                    Servicio 1
                  </a>
                  <a href="#servicio2" className="hover:text-oxford">
                    Servicio 2
                  </a>
                  <a href="#servicio3" className="hover:text-oxford">
                    Servicio 3
                  </a>
                </div>
              )}
            </div>

            {/* MARCAS móvil */}
            <div>
              <button
                onClick={() => setActiveMenu(activeMenu === "marcas" ? null : "marcas")}
                className="flex items-center gap-1 hover:text-mint transition-colors"
              >
                MARCAS <ChevronDownIcon className="h-4 w-4 text-mint" />
              </button>
              {activeMenu === "marcas" && (
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  <a href="#marca1" className="hover:text-oxford">
                    Marca 1
                  </a>
                  <a href="#marca2" className="hover:text-oxford">
                    Marca 2
                  </a>
                  <a href="#marca3" className="hover:text-oxford">
                    Marca 3
                  </a>
                </div>
              )}
            </div>

            <a href="#contacto" className="hover:text-mint transition-colors">
              CONTACTO
            </a>
            <a
              href="#conocenos"
              className="px-4 py-2 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition font-semibold text-center"
            >
              CONÓCENOS
            </a>
          </nav>
        )}
      </div>

      {/* Overlay para cerrar menú móvil tocando fuera (opcional) */}
      {menuOpen && (
        <button
          aria-label="Cerrar menú"
          onClick={() => {
            setMenuOpen(false);
            setActiveMenu(null);
          }}
          className="fixed inset-0 bg-black/30 lg:hidden z-40"
        />
      )}
    </header>
  );
}