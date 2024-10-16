"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AiOutlineCaretDown } from "react-icons/ai";
import { Navbar } from "../Navbar";

import { cn } from "@/lib/utils";
import { formatPENPrice } from "@/lib/formatPrice";
import { optionsHomebanking } from "@/data";

export function HeaderComponent() {
  const tc_cambio = { compra: 3.71, venta: 3.775 };

  return (
    <div className="h-44 border-b border-b-slate-300">
      <div className="bg-redCaja p-2">
        <div className="max-w-5xl mx-auto pt-5 px-0 items-center">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/images/logo-main.png"
                alt="Logo Caja Trujillo"
                width={180}
                height={80}
              />
            </Link>
            <div className="flex flex-col items-end pt-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      "text-redCaja w-fit hover:bg-white font-bold hover:text-redCaja rounded-sm uppercase text-lg border-none transition-none"
                    )}
                  >
                    Homebanking
                    <AiOutlineCaretDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-52 flex flex-col gap-y-2 p-3">
                  {optionsHomebanking.map(({ href, id, label }) => (
                    <Link
                      key={id}
                      href={href}
                      className="rounded-sm p-1 bg-yellowCaja text-center hover:bg-redCaja text-white"
                    >
                      {label}
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="mt-3 flex justify-end text-xs text-white">
            <span>T.C.Web: Compra: {formatPENPrice(tc_cambio.compra)}</span>
            <span className="ml-4">
              Venta: {formatPENPrice(tc_cambio.venta)}
            </span>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
