import { MenuDesktop } from "./_components/MenuDesktop";
import { MenuMobile } from "./_components/MenuMobile";

export function Navbar() {
  return (
    <div className="bg-transparent mt-1">
      <div className="max-w-5xl mx-auto">
        <div className="items-center justify-between hidden sm:flex">
          <MenuDesktop />
        </div>
        <div className="flex sm:hidden justify-end">
          <MenuMobile />
        </div>
      </div>
    </div>
  );
}
