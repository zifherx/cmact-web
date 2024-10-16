import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";
import {
  menuNavbarCanalesAlternativos,
  menuNavbarParaTi,
  menuNavbarTuNegocio,
} from "@/data";
import { ListItem } from "../ListItem";
import Link from "next/link";

export function MenuMobile() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="flex flex-row gap-2 ml-5">
          Menú
          <Menu />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-90">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-redCaja text-base font-bold hover:no-underline">
              Para ti
            </AccordionTrigger>
            <AccordionContent>
              {menuNavbarParaTi.map(({ id, submenu, title }) => (
                <div key={id} className="p-1">
                  <h4 className="font-semibold text-sm text-redCaja mb-2">
                    {title}
                  </h4>
                  <ul className="list-inside list-disc ml-5">
                    {submenu.map(({ id, href, subtitle }) => (
                      <Link
                        key={id}
                        href={href}
                        className="text-sm font-light hover:text-redCaja"
                      >
                        <li>{subtitle}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-redCaja text-base font-bold hover:no-underline">
              Para tu negocio
            </AccordionTrigger>
            <AccordionContent>
              {menuNavbarTuNegocio.map(({ id, submenu, title }) => (
                <div key={id} className="p-1">
                  <h4 className="font-semibold text-sm text-redCaja mb-2">
                    {title}
                  </h4>
                  <ul className="list-inside list-disc ml-5">
                    {submenu.map(({ id, href, subtitle }) => (
                      <Link
                        key={id}
                        href={href}
                        className="text-sm font-light hover:text-redCaja"
                      >
                        <li>{subtitle}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-redCaja text-base font-bold hover:no-underline">
              Canales alternativos
            </AccordionTrigger>
            <AccordionContent>
              {menuNavbarCanalesAlternativos.map(({ id, submenu, title }) => (
                <div key={id} className="p-1">
                  <h4 className="font-semibold text-sm text-redCaja mb-2">
                    {title}
                  </h4>
                  <ul className="list-inside list-disc ml-5">
                    {submenu.map(({ id, href, subtitle }) => (
                      <Link
                        key={id}
                        href={href}
                        className="text-sm font-light hover:text-redCaja"
                      >
                        <li>{subtitle}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </PopoverContent>
    </Popover>
  );
}
