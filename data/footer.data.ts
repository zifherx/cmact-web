import { LiaFacebookF } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { PiBookOpen } from "react-icons/pi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

import { iMenuFooter, iRedSocial } from "@/interfaces";

export const redesSociales: iRedSocial[] = [
  {
    id: 1,
    name: "Facebook",
    icon: LiaFacebookF,
    href: "https://www.facebook.com/CajaTrujilloOficial/",
  },
  {
    id: 2,
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/cajatrujillo/",
  },
  {
    id: 3,
    name: "X",
    icon: FaTwitter,
    href: "https://twitter.com/caja_trujillo",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/caja-trujillo-oficial/",
  },
  {
    id: 5,
    name: "Youtube",
    icon: FaYoutube,
    href: "https://www.youtube.com/user/cajatrujillooficial/videos",
  },
];

export const listSubmenuFooter: iMenuFooter[] = [
  {
    id: 1,
    title: "¿Quiénes somos?",
    submenu: [
      {
        id: 1,
        href: "#",
        label: "Nuestra Caja",
      },
      {
        id: 2,
        href: "#",
        label: "Buen gobierno corporativo",
      },
    ],
  },
  {
    id: 2,
    title: "Te escuchamos",
    submenu: [
      {
        id: 1,
        href: "#",
        label: "Libro de Reclamaciones",
        icon: PiBookOpen,
      },
      {
        id: 2,
        href: "#",
        label: "Buzón de prácticas cuestionables",
      },
      {
        id: 3,
        href: "#",
        label: "Transparencia",
      },
    ],
  },
  {
    id: 3,
    title: "Trabaja con nosotros",
    submenu: [
      {
        id: 1,
        href: "#",
        label: "Convocatorias vigentes",
      },
      {
        id: 2,
        href: "#",
        label: "Ganadores de proceso de selección",
      },
    ],
  },
  {
    id: 4,
    title: "Información de interés",
    submenu: [
      {
        id: 1,
        href: "#",
        label: "Red de Oficinas",
        icon: HiOutlineBuildingStorefront,
      },
      {
        id: 2,
        href: "#",
        label: "Protocolos de bioseguridad",
      },
      {
        id: 3,
        href: "#",
        label: "Recomendaciones de Homebanking",
      },
      {
        id: 4,
        href: "#",
        label: "Portal de orientación y servicios al ciudadano",
      },
      {
        id: 5,
        href: "#",
        label: "Contratación de servicios notariales",
      },
      {
        id: 6,
        href: "#",
        label: "Proveedores",
      },
      {
        id: 7,
        href: "#",
        label: "Venta de inmuebles",
      },
      {
        id: 8,
        href: "#",
        label: "Consulta de comprobante de pago electrónico",
      },
      {
        id: 9,
        href: "#",
        label: "Política de Seguridad y Salud en el Trabajo",
      },
      {
        id: 10,
        href: "#",
        label: "Política de Privacidad",
      },
    ],
  },
  {
    id: 5,
    title: "Información adicional de productos",
    submenu: [
      {
        id: 1,
        href: "#",
        label: "Tarifario",
      },
      {
        id: 2,
        href: "#",
        label: "Fórmulas",
      },
      {
        id: 3,
        href: "#",
        label: "Pólizas",
      },
      {
        id: 4,
        href: "#",
        label: "Formularios Contractuales",
      },
      {
        id: 5,
        href: "#",
        label: "Simulador de Créditos",
      },
      {
        id: 6,
        href: "#",
        label: "Simulador de Ahorros",
      },
      {
        id: 7,
        href: "#",
        label: "Validar carta fianza",
      },
    ],
  },
];
