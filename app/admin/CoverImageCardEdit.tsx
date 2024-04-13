import { Button } from "@/components/ui/button";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function CoverImageCardEdit({
  coverImageUrl,
  coverImageName,
}: {
  coverImageUrl: string;
  coverImageName: string;
}) {
  return (
    <>
      <div className="flex flex-row justify-between pb-2 items-baseline">
        <h2 className="text-lg font-semibold">{coverImageName}</h2>
        <Button size={"sm"} variant="outline" className=" rounded-lg">
          <PencilSquareIcon className="h-4 w-4 mr-2" /> Change
        </Button>
      </div>
      <div className="relative w-full h-[32rem]">
        <Image
          src={coverImageUrl}
          alt="street image"
          className="absolute object-cover rounded-lg"
          fill
        />
      </div>
    </>
  );
}
