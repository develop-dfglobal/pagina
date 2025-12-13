"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ScrollLink } from "../ScrollLink";
import { menuItems } from "./menuConfig";

interface HeaderDesktopMenuProps {
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
  openContactModal: () => void; // << nueva prop
}

export default function HeaderDesktopMenu({
  activeMenu,
  setActiveMenu,
  openContactModal,
}: HeaderDesktopMenuProps) {
  return (
    <nav className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide pb-3">
      {/* Items principales */}
      {menuItems.main.map((item) => (
        <ScrollLink
          key={item.id}
          targetId={item.id}
          className="hover:text-mint transition-colors"
        >
          {item.label}
        </ScrollLink>
      ))}

      {/* Menú desplegable SERVICIOS */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("servicios")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center gap-1 hover:text-mint transition-colors">
          {menuItems.servicios.label}{" "}
          <ChevronDownIcon className="h-4 w-4 text-mint" />
        </button>
        <div className="absolute left-0 top-full h-2 w-full" />
        <div
          className={`absolute left-0 top-[calc(100%+8px)] bg-white rounded-md shadow-lg z-50 min-w-[220px] text-black py-3 px-4 transform transition-all duration-300 ease-out ${
            activeMenu === "servicios"
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible"
          }`}
        >
          {menuItems.servicios.items.map((item) => (
            <ScrollLink
              key={item.id}
              targetId={item.href.replace("#", "")}
              className="block py-2 hover:text-oxford border-b border-gray-200 last:border-b-0"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      </div>

      {/* Menú desplegable MARCAS */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("marcas")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center gap-1 hover:text-mint transition-colors">
          {menuItems.marcas.label}{" "}
          <ChevronDownIcon className="h-4 w-4 text-mint" />
        </button>
        <div className="absolute left-0 top-full h-2 w-full" />
        <div
          className={`absolute left-0 top-[calc(100%+8px)] bg-white rounded-md shadow-lg z-50 min-w-[220px] text-black py-3 px-4 transform transition-all duration-300 ease-out ${
            activeMenu === "marcas"
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible"
          }`}
        >
          {menuItems.marcas.items.map((item) => (
            <ScrollLink
              key={item.id}
              targetId={item.href.replace("#", "")}
              className="block py-2 hover:text-oxford border-b border-gray-200 last:border-b-0"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      </div>

      {/* CONTACTO */}
      <button
        className="hover:text-mint transition-colors"
        onClick={openContactModal}
      >
        CONTACTO
      </button>

      {/* Botón SOPORTE */}
        <a
          href="https://wa.me/584142005820"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition font-semibold"
        >
          {menuItems.soporte.label}
        </a>
    </nav>
  );
}