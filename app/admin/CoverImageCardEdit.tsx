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
          <DialogTrigger>
            <Button size={"sm"} variant="outline" className=" rounded-lg">
              <PencilSquareIcon className="h-4 w-4 mr-2" /> Change
            </Button>
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
