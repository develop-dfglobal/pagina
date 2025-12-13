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
      { id: "fortinet", label: "Fortinet", href: "#marcas" },
      { id: "cisco", label: "Cisco", href: "#marcas" },
      { id: "hpe", label: "HPE", href: "#marcas" },
      { id: "dell", label: "Dell", href: "#marcas" },
      { id: "aruba", label: "Aruba", href: "#marcas" },
      { id: "ibm", label: "IBM", href: "#marcas" },
    ],
  },
  contacto: { id: "footer", label: "CONTACTO", href: "#footer" },
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