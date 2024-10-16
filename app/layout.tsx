import { ReactNode } from "react";
import type { Metadata } from "next";

import NextTopLoader from "nextjs-toploader";

import { ScrollToTop } from "@/components/Shared/ScrollToTop";
import { roboto_regular } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caja Trujillo",
  description: "Caja Municipal de Ahorro y Crédito de Trujillo y S.A.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es-PE">
      <body className={roboto_regular.className}>
        <NextTopLoader
          color="#FFC200"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #FFC200,0 0 5px #FFC200"
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
