import { BannerPortadas } from "./components/BannerPortadas";
import { AccesosRapidos } from "./components/AccesosRapidos";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-0">
      <BannerPortadas />
      <AccesosRapidos />
    </main>
  );
}
