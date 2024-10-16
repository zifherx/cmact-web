import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto_regular = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto-regular",
});

export const roboto_bold = Roboto({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-roboto-bold",
});

export const ameliaRegular = localFont({
  src: "../public/fonts/AmeliaRounded-Regular.otf",
  variable: "--font-amelia-regular",
});

export const ameliaBold = localFont({
  src: "../public/fonts/AmeliaRounded-Bold.otf",
  variable: "--font-amelia-bold",
});
