import Image from "next/image";
import { RedesSociales } from "./_components/RedesSociales";
import { MenuFooter } from "./_components/MenuFooter";

export function FooterComponent() {
  const getYear = new Date().getFullYear();

  return (
    <footer className="h-28">
      <div className="bg-transparent">
        <div className="max-w-5xl mx-auto">
          <RedesSociales />
          <MenuFooter />
        </div>
      </div>
      <div className="bg-redCaja">
        <div className="max-w-5xl mx-auto flex items-center py-4 px-0 justify-between text-white">
          <Image
            src="/images/logo-main.png"
            alt="Logo Caja Trujillo"
            width={100}
            height={40}
          />
          <p className="text-xs">
            © Caja Municipal de Ahorro y Crédito de Trujillo y S.A. Todos los
            derechos reservados {getYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
