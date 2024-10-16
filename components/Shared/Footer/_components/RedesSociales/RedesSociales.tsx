import { redesSociales } from "@/data";
import { SocialIcon } from "./SocialIcon";

export function RedesSociales() {
  return (
    <div className="flex justify-center md:justify-end items-center">
      <div className="flex flex-row gap-1">
        {redesSociales.map(({ id, href, icon, name }) => (
          <SocialIcon key={id} id={id} href={href} icon={icon} name={name} />
        ))}
      </div>
    </div>
  );
}
