import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ListItem } from "../ListItem";

import {
  menuNavbarCanalesAlternativos,
  menuNavbarParaTi,
  menuNavbarTuNegocio,
} from "@/data";
import { cn } from "@/lib/utils";

export function MenuDesktop() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="text-redCaja">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold hover:text-redCaja text-lg">
            Para ti
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="max-w-5xl mx-auto p-4 w-[1050px]">
              <div className="grid grid-cols-4 gap-4 p-3">
                <div className="p-1 flex flex-col border-r-2 border-r-black">
                  {menuNavbarParaTi
                    .slice(0, 1)
                    .map(({ id, submenu, title }) => (
                      <div key={id} className="flex flex-col list-none">
                        <h4 className="font-bold text-redCaja mb-3">{title}</h4>
                        {submenu.map(({ id, href, subtitle }) => (
                          <ListItem key={id} title={subtitle} href={href} />
                        ))}
                      </div>
                    ))}
                </div>
                <div className="flex flex-col gap-3 list-none border-r-2 border-r-black">
                  {menuNavbarParaTi
                    .slice(1, 3)
                    .map(({ id, submenu, title }) => (
                      <div key={id}>
                        <h4 className="font-bold text-redCaja mb-3">{title}</h4>
                        {submenu.map(({ id, href, subtitle }) => (
                          <ListItem key={id} title={subtitle} href={href} />
                        ))}
                      </div>
                    ))}
                </div>
                <div className="flex flex-col gap-3 list-none border-r-2 border-r-black">
                  {menuNavbarParaTi
                    .slice(3, 5)
                    .map(({ id, submenu, title }) => (
                      <div key={id}>
                        <h4 className="font-bold text-redCaja mb-3">{title}</h4>
                        {submenu.map(({ id, href, subtitle }) => (
                          <ListItem key={id} title={subtitle} href={href} />
                        ))}
                      </div>
                    ))}
                </div>
                <div className="flex flex-col list-none">
                  {menuNavbarParaTi.slice(5).map(({ id, submenu, title }) => (
                    <div key={id}>
                      <h4 className="font-bold text-redCaja mb-3">{title}</h4>
                      {submenu.map(({ id, href, subtitle }) => (
                        <ListItem key={id} title={subtitle} href={href} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold hover:text-redCaja text-lg">
            Para tu negocio
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="max-w-5xl mx-auto p-4 w-[1050px]">
              <div className="grid grid-cols-4 gap-4 p-3">
                <div className="p-1 flex flex-col border-r-2 border-r-black">
                  {menuNavbarTuNegocio
                    .slice(0, 1)
                    .map(({ id, submenu, title }) => (
                      <div key={id} className="flex flex-col list-none">
                        <h4 className="font-bold text-redCaja mb-3">{title}</h4>
                        {submenu.map(({ id, href, subtitle }) => (
                          <ListItem key={id} title={subtitle} href={href} />
                        ))}
                      </div>
                    ))}
                </div>
                <div className="flex flex-col list-none border-r-2 border-r-black">
                  {menuNavbarTuNegocio
                    .slice(1, 2)
                    .map(({ id, submenu, title }) => (
                      <div key={id}>
                        <h4 className="font-bold text-redCaja mb-3">{title}</h4>
                        {submenu.map(({ id, href, subtitle }) => (
                          <ListItem key={id} title={subtitle} href={href} />
                        ))}
                      </div>
                    ))}
                </div>
                <div className="flex flex-col gap-3 list-none border-r-2 border-r-black">
                  {menuNavbarTuNegocio
                    .slice(2, 4)
                    .map(({ id, submenu, title }) => (
                      <div key={id}>
                        <h4 className="font-bold text-redCaja mb-3">{title}</h4>
                        {submenu.map(({ id, href, subtitle }) => (
                          <ListItem key={id} title={subtitle} href={href} />
                        ))}
                      </div>
                    ))}
                </div>
                <div className="flex flex-col list-none">
                  {menuNavbarTuNegocio
                    .slice(4)
                    .map(({ id, submenu, title }) => (
                      <div key={id}>
                        <h4 className="font-bold text-redCaja mb-3">{title}</h4>
                        {submenu.map(({ id, href, subtitle }) => (
                          <ListItem key={id} title={subtitle} href={href} />
                        ))}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold hover:text-redCaja text-lg">
            Canales alternativos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-1 w-[400px] gap-3 p-4 ">
              {menuNavbarCanalesAlternativos.map(({ id, submenu, title }) => (
                <div key={id} className="flex flex-col list-none">
                  <h4 className="font-bold text-redCaja mb-3">{title}</h4>
                  {submenu.map(({ id, href, subtitle }) => (
                    <ListItem key={id} title={subtitle} href={href} />
                  ))}
                </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
