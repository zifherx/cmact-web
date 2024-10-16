import Image from "next/image";
import { RedesSociales } from "./_components/RedesSociales";
import { MenuFooter } from "./_components/MenuFooter";

export function FooterComponent() {
  const getYear = new Date().getFullYear();

  return (
    <footer className="h-full">
      <div className="bg-transparent">
        <div className="max-w-5xl mx-auto">
          <RedesSociales />
          <MenuFooter />
        </div>
      </div>
      <div className="bg-redCaja">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-2 md:gap-0 items-center p-2 md:py-4 md:px-0 justify-normal md:justify-between">
          <Image
            src="/images/logo-main.png"
            alt="Logo Caja Trujillo"
            width={100}
            height={40}
          />
          <p className="text-center md:text-right text-xs text-white">
            © Caja Municipal de Ahorro y Crédito de Trujillo y S.A. <br />
            Todos los derechos reservados {getYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
