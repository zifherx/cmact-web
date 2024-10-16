import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { DynamicSVG } from "@/components/Shared/DynamicSVG";

import { iGroupQA } from "@/interfaces";

export function CardAcceso({ element }: iGroupQA) {
  const { title, href, icon } = element;

  return (
    <Link href={href}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer group">
        <CardContent className="p-0 md:h-full flex flex-col">
          <div className="bg-white px-2 md:p-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-redCaja">
            <DynamicSVG
              src={`/images/quick-access/${icon}`}
              className="w-24 h-24 md:w-32 md:h-32 text-redCaja transition-colors duration-300 group-hover:text-white"
            />
          </div>
          <div className="bg-[#e5e5e5] h-[70px] md:h-[100px] p-4 flex-grow flex items-center justify-center">
            <p className="text-center text-xs md:text-base leading-tight font-medium text-black transition-all duration-300 group-hover:font-bold">
              {title}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
