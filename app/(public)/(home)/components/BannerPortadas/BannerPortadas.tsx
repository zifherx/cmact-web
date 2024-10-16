"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { bannerPortada } from "@/data";

export function BannerPortadas() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <div className="w-full h-auto">
      <Carousel opts={{ loop: true }} plugins={[plugin.current]}>
        <CarouselContent>
          {bannerPortada.map(({ id, alt, src }) => (
            <CarouselItem key={id}>
              <Image
                src={`/images/portadas/${src}`}
                alt={alt}
                width={2000}
                height={780}
                priority
                className="rounded-sm mt-1"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent border-none hidden md:flex md:ml-20 text-redCaja hover:text-yellowCaja hover:border-none hover:bg-transparent" />
        <CarouselNext className="bg-transparent border-none hidden md:flex md:mr-20 text-redCaja hover:text-yellowCaja hover:border-none hover:bg-transparent" />
      </Carousel>
    </div>
  );
}
