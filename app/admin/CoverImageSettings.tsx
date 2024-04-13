import { Button } from "@/components/ui/button";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import cloudinary from "cloudinary";

export default async function CoverImageSettings() {
  const { resources: coverImages } = await cloudinary.v2.api.resources_by_tag(
    "coverImage",
    { tags: true }
  );
  const streetCoverPhoto = coverImages.find((image) =>
    image.tags.includes("coverImageStreet")
  );
  const portraitCoverPhoto = coverImages.find((image) =>
    image.tags.includes("coverImagePortait")
  );
  const studioCoverPhoto = coverImages.find((image) =>
    image.tags.includes("coverImageStudio")
  );
  const boudoirCoverPhoto = coverImages.find((image) =>
    image.tags.includes("coverImageBoudoir")
  );
  return (
    <ul className="w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-2">
      <li className="w-full h-fit bg-cyan-100 p-4 rounded-lg">
        <div className="flex flex-row justify-between pb-2 items-baseline">
          <h2 className="text-lg font-semibold">Street Cover Image</h2>
          <Button size={"sm"} variant="outline" className=" rounded-lg">
            <PencilSquareIcon className="h-4 w-4 mr-2" /> Change
          </Button>
        </div>
        <div className="relative w-full h-[32rem]">
          <Image
            src={streetCoverPhoto?.url as string}
            alt="street image"
            className="absolute object-cover rounded-lg"
            fill
          />
        </div>
      </li>
      <li className="w-full h-fit relative bg-indigo-100 p-4 rounded-lg">
        <div className="flex flex-row justify-between pb-2 items-baseline">
          <h2 className="text-lg font-semibold">Portait Cover Image</h2>
          <Button size={"sm"} variant="outline" className=" rounded-lg">
            <PencilSquareIcon className="h-4 w-4 mr-2" /> Change
          </Button>
        </div>
        <div className="relative w-full h-[32rem]">
          <Image
            src={portraitCoverPhoto?.url as string}
            alt="portait image"
            className="absolute object-cover rounded-lg"
            fill
          />
        </div>
      </li>
      <li className="w-full h-fit relative bg-rose-100 p-4 rounded-lg">
        <div className="flex flex-row justify-between pb-2 items-baseline">
          <h2 className="text-lg font-semibold">Studio Cover Image</h2>
          <Button size={"sm"} variant="outline" className=" rounded-lg">
            <PencilSquareIcon className="h-4 w-4 mr-2" /> Change
          </Button>
        </div>
        <div className="relative w-full h-[32rem]">
          <Image
            src={studioCoverPhoto?.url as string}
            alt="street image"
            className="absolute object-cover rounded-lg"
            fill
          />
        </div>
      </li>
      <li className="w-full h-fit relative bg-pink-100 p-4 rounded-lg">
        <div className="flex flex-row justify-between pb-2 items-baseline">
          <h2 className="text-lg font-semibold">Boudoir Cover Image</h2>
          <Button size={"sm"} variant="outline" className=" rounded-lg">
            <PencilSquareIcon className="h-4 w-4 mr-2" /> Change
          </Button>
        </div>
        <div className="relative w-full h-[32rem]">
          <Image
            src={boudoirCoverPhoto?.url as string}
            alt="Boudoir image"
            className="absolute object-cover rounded-lg"
            fill
          />
        </div>
      </li>
    </ul>
  );
}
