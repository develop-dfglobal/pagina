"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-mint text-oxford px-6 pt-16 pb-6">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        
        {/* Bloque Logo + RRSS */}
        <div className="flex flex-1 flex-col items-center justify-center space-y-6">
          {/* Logo */}
          <Image
            src="/logos/NEGRO.png"
            alt="DF GLOBAL CONSULTING"
            width={240}
            height={80}
            className="object-contain"
          />

          {/* Redes sociales */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-oxford text-mint hover:bg-mint hover:text-oxford transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-oxford text-mint hover:bg-mint hover:text-oxford transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-oxford text-mint hover:bg-mint hover:text-oxford transition"
            >
              <FaLinkedinIn />
            </a>
            
          </div>
        </div>

        {/* Bloque Ubicación */}
        <div className="flex flex-1 items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.7406142566906!2d-66.88452352502392!3d10.495526364312314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59207a128583%3A0xb0bbd1f5aa48397c!2sTorre%20Domus%2C%20Caracas%201052%2C%20Distrito%20Capital!5e1!3m2!1ses!2sve!4v1764576436649!5m2!1ses!2sve"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-md"
          ></iframe>
        </div>
      </div>

      {/* Derechos */}
      <div className="mt-8 text-center font-bold text-sm text-oxford">
        Copyright © 2025. DF GLOBAL CONSULTING - Todos los derechos reservados.
      </div>
    </footer>
  );
}