import { ReactNode } from "react";
import { FooterComponent } from "@/components/Shared/Footer";
import { HeaderComponent } from "@/components/Shared/Header";

export default function publicLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
}
