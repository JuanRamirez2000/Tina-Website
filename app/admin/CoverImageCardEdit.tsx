import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import NewPhotoControl from "./AdminControls/NewPhotoControl";

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
        <Dialog>
          <DialogTrigger className="rounded-lg inline-flex flex-row px-3 py-2 bg-white items-center hover:scale-105 duration-75 transition-all">
            <PencilSquareIcon className="h-5 w-5 mr-2" /> Change
          </DialogTrigger>
          <DialogContent>
            <Tabs defaultValue="change" className="w-full ">
              <TabsList>
                <TabsTrigger value="change">Change</TabsTrigger>
                <TabsTrigger value="new">New</TabsTrigger>
              </TabsList>
              <TabsContent value="change">Use a current photo</TabsContent>
              <TabsContent value="new">
                <NewPhotoControl />
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
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
