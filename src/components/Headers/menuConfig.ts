export const menuItems = {
  main: [
    { id: "inicio", label: "INICIO", href: "#inicio" },
    { id: "about", label: "NOSOTROS", href: "#about" },
  ],
  servicios: {
    label: "SERVICIOS",
    items: [
      { id: "ciber-seguridad", label: "Ciber Seguridad", href: "#servicios" },
      { id: "redes", label: "Diseño e implementación de Redes", href: "#servicios" },
      { id: "servidores", label: "Servidores y DataCenter", href: "#servicios" },
      { id: "noc-soc", label: "NOC/SOC", href: "#servicios" },
    ],
  },
  marcas: {
    label: "MARCAS",
    items: [
      { id: "marca1", label: "Marca 1", href: "#marca1" },
      { id: "marca2", label: "Marca 2", href: "#marca2" },
      { id: "marca3", label: "Marca 3", href: "#marca3" },
    ],
  },
  contacto: { id: "contacto", label: "CONTACTO", href: "#contacto" },
  soporte: { id: "soporte", label: "SOPORTE", href: "#conocenos", isButton: true },
};

export type MenuItem = {
  id: string;
  label: string;
  href: string;
  isButton?: boolean;
};

export type DropdownMenu = {
  label: string;
  items: MenuItem[];
};