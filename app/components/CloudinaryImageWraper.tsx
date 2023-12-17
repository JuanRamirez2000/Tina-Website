"use client";

import { CldImage } from "next-cloudinary";

export default function CloduinaryImageWrapper({
  width,
  height,
  src,
  sizes,
  alt,
  className,
}: {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  src: string;
  sizes?: string | undefined;
  alt: string;
  className?: string;
}) {
  return (
    <CldImage
      width={width}
      height={height}
      src={src}
      sizes={sizes}
      alt={alt}
      priority={true}
      className={className}
    />
  );
}
