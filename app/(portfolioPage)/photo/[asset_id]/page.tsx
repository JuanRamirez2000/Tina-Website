import cloudinary from "cloudinary";
import CloduinaryImageWrapper from "@/app/components/CloudinaryImageWraper";

export default async function PhotoPage({
  params,
}: {
  params: { asset_id: string };
}) {
  const { resources } = await cloudinary.v2.api.resources_by_asset_ids(
    params.asset_id
  );
  return (
    <main className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-indigo-300 to-pink-300">
      <figure className="relative flex flex-col items-center justify-center w-3/4 overflow-hidden h-3/4">
        <CloduinaryImageWrapper
          src={resources[0].public_id}
          height={resources[0].height}
          width={resources[0].width}
          alt=""
          className="rounded-lg"
        />
      </figure>
    </main>
  );
}
