import cloudinary from "cloudinary";
import ImageModal from "./ImageModal";
import CloduinaryImageWrapper from "@/components/CloudinaryImageWraper";

export default async function PhotoModal({
  params,
}: {
  params: { asset_id: string };
}) {
  const { resources } = await cloudinary.v2.api.resources_by_asset_ids(
    params.asset_id
  );
  return (
    <ImageModal>
      <figure className="relative flex flex-col items-center justify-center w-4/5 overflow-hidden h-5/6 lg:w-1/4 lg:h-3/4 rounded-xl">
        <CloduinaryImageWrapper
          src={resources[0].public_id}
          height={resources[0].height}
          width={resources[0].width}
          alt=""
        />
      </figure>
    </ImageModal>
  );
}
