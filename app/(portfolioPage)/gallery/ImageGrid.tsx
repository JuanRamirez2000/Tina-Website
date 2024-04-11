import Link from "next/link";
import CloduinaryImageWrapper from "../../../components/CloudinaryImageWraper";
import { ResourceApiResponse } from "cloudinary";

export default function ImageGrid({
  images,
}: {
  images: ResourceApiResponse["resources"];
}) {
  return (
    <div className="w-[90%] h-fit columns-1 md:columns-2 lg:columns-3 2xl:columns-5">
      {images.map((image) => (
        <Link href={`/photo/${image.asset_id}`} key={image.asset_id}>
          <CloduinaryImageWrapper
            src={image.public_id}
            height={image.height}
            width={image.width}
            alt="Tina Hero Page"
            className="my-6 transition-all shadow-lg cursor-pointer rounded-xl hover:scale-105 "
          />
        </Link>
      ))}
    </div>
  );
}
