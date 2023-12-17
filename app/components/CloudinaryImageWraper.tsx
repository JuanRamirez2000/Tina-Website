"use client";

import { CldImage } from "next-cloudinary";

export default function CloduinaryImageWrapper({
  src,
  alt,
  className,
}: {
  src: string;
  sizes?: string | undefined;
  alt: string;
  className?: string;
}) {
  return (
    <CldImage src={src} alt={alt} priority={true} fill className={className} />
  );
}
