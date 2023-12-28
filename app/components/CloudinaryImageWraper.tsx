"use client";

import { CldImage } from "next-cloudinary";

export default function CloduinaryImageWrapper({
  src,
  alt,
  height,
  width,
  fill,
  className,
}: {
  src: string;
  sizes?: string | undefined;
  height?: number;
  width?: number;
  alt: string;
  fill?: boolean;
  className?: string;
}) {
  return (
    <CldImage
      src={src}
      alt={alt}
      priority={true}
      height={height}
      width={width}
      fill={fill}
      className={className}
      sizes="100vw"
    />
  );
}
