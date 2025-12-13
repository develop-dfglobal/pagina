"use client";

import React from "react";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ContactModal({ open, onClose }: ContactModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-oxford/60 bg-opacity-50 flex items-center justify-center z-[1000]">
      <div className="bg-white/90 text-black p-12 rounded shadow-lg max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold mb-8 font-sans">CONTACTO</h2>
        <p className="mb-8 text-lg">
          Puedes comunicarte con nosotros por correo, WhatsApp o teléfono:
        </p>

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
          onClick={onClose}
          className="bg-oxford text-white px-8 py-4 rounded text-lg"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}