import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { iRedSocial } from "@/interfaces";

export function SocialIcon({ href, icon: Icon, id, name }: iRedSocial) {
  return (
    <TooltipProvider key={id}>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={href}
            target="_blank"
            className="bg-[#5C595C] p-1.5 rounded-full flex justify-center"
          >
            <Icon className="w-5 h-5 text-white" strokeWidth={2} />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Ir a {name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
