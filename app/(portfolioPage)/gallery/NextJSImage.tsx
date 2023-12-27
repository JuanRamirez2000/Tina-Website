"use server";
import CloduinaryImageWrapper from "@/app/components/CloudinaryImageWraper";
import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default async function NextJsImage({
  photo,
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <CloduinaryImageWrapper src={photo.src} alt="" />
    </div>
  );
}
