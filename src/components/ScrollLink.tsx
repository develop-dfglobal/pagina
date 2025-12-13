"use client";

import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

type ScrollLinkProps = {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function ScrollLink({ targetId, children, className, onClick }: ScrollLinkProps) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (targetId === "footer" || targetId === "contacto") {
      setShowModal(true);
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;

        const headerMenu = document.querySelector(".bg-oxford");
        const headerHeight = headerMenu?.getBoundingClientRect().height || 0;

        const sectionHeight = targetElement.getBoundingClientRect().height;

        const offsetMap: Record<string, number> = {
          servicios: 60,
          marcas: 60,
          about: 60,
          inicio: 60,
          ClientTestimonials: 60,
        };

        const extraOffset = offsetMap[targetId] ?? 60;

        const scrollPosition = elementTop - headerHeight + extraOffset;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }

    if (onClick) onClick();
  };

  return (
    <>
      <a href={`#${targetId}`} onClick={handleClick} className={className}>
        {children}
      </a>

      {showModal && (
        <div className="fixed inset-0 bg-oxford/60 bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal más ancho */}
          <div className="bg-white text-black p-12 rounded shadow-lg max-w-4xl w-full text-center">
            <h2 className="text-3xl font-bold mb-8 font-sans">CONTACTO</h2>
            <p className="mb-8 text-lg">
              Puedes comunicarte con nosotros por correo, WhatsApp o teléfono:
            </p>

            {/* Íconos de contacto en la misma línea */}
            <div className="flex flex-wrap justify-around gap-8 mb-10 items-center">
              <a
                href="mailto:Info@dfglobal.com.ve"
                className="flex items-center gap-3 text-oxford hover:text-blue-600 text-lg"
              >
                <FaEnvelope size={32} />
                <span>Info@dfglobal.com.ve</span>
              </a>
              <a
                href="https://wa.me/584142005820"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-600 hover:text-green-700 text-lg"
              >
                <FaWhatsapp size={32} />
                <span>+58 414 2005820</span>
              </a>
              <div className="flex items-center gap-3 text-oxford text-lg">
                <FaPhone size={32} />
                <span>0212 7710251</span>
              </div>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="bg-oxford text-white px-8 py-4 rounded text-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}