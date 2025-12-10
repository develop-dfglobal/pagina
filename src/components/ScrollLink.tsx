// components/ScrollLink.tsx
"use client";

import React from "react";

type ScrollLinkProps = {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // ← AGREGAR ESTA LÍNEA
};

export function ScrollLink({ targetId, children, className, onClick }: ScrollLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        if (onClick) onClick(); // ← LLAMAR AL onClick SI EXISTE
      }}
      className={className}
    >
      {children}
    </a>
  );
}