import { accesosRapidos } from "@/data";
import { CardAcceso } from "./CardAcceso";

export function AccesosRapidos() {
  return (
    <section className="max-w-5xl mx-auto py-10 px-0">
      <h2 className="text-xl text-center mb-3">Accesos rápidos</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:py-4">
        {accesosRapidos.map((item, index) => (
          <CardAcceso key={index} element={item} />
        ))}
      </div>
    </section>
  );
}
