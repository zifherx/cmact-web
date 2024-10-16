import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

export interface iRedSocial {
  id: number;
  name: string;
  icon: IconType;
  href: string;
}

export interface iMenuFooter {
  id: number;
  title: string;
  submenu: iSubmenuFooter[];
}

export interface iSubmenuFooter {
  id: number;
  icon?: IconType;
  href: string;
  label: string;
}

export interface iPortada {
  id: number;
  alt: string;
  src: string;
}

export interface iQuickAccess {
  id: number;
  icon: string;
  title: string;
  href: string;
  iconColor: string;
  hoverIconColor: string;
}

export interface iGroupQA {
  element: iQuickAccess;
}

export interface iSVGIcon {
  src: string;
  className?: string;
}

export interface iMenuHeader {
  id: number;
  title: string;
  submenu: iSubmenuHeader[];
}

export interface iSubmenuHeader {
  id: number;
  subtitle: string;
  href: string;
  description: string;
}

export interface iHomebanking {
  id: number;
  label: string;
  href: string;
}
