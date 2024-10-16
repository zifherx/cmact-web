"use client";

import { FC, useEffect, useState } from "react";
import { iSVGIcon } from "@/interfaces";

export const DynamicSVG: FC<iSVGIcon> = ({ src, className }) => {
  const [svgContent, setSvgContent] = useState<string>("");

  const getSVG = async () => {
    const query = await fetch(src);
    const res = await query.text();
    setSvgContent(res);
  };

  useEffect(() => {
    getSVG();
  }, [src]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};
