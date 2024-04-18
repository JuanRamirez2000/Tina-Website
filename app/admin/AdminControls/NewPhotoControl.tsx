"use client";

import { addImageTags } from "@/app/actions/imageActions";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { UploadApiResponse } from "cloudinary";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

export default function NewPhotoControl() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [imageUploaded, setImageUploaded] = useState<UploadApiResponse | null>(
    null
  );
  const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);

  const updateTags = (tagName: string) => {
    if (!selectedTags.includes(tagName)) {
      setSelectedTags([...selectedTags, tagName]);
    } else {
      const newTags = selectedTags.filter((tag) => tag !== tagName);
      setSelectedTags(newTags);
    }
  };

  return (
    <>
      <CldUploadWidget
        uploadPreset="tinaUpload"
        onSuccess={(result, { widget }) => {
          const image = result.info;
          if (image) {
            widget.close();
            setImageUploaded(image as UploadApiResponse);
            setOpenConfirmation(true);
          }
        }}
      >
        {({ open }) => {
          return (
            <button
              onClick={() => open()}
              className="w-fit px-4 py-3 bg-slate-50 rounded-xl flex flex-row justify-center gap-2 items-center hover:bg-slate-100 cursor-pointer hover:scale-105 duration-75 transition-all"
            >
              <p>Add photos</p>
              <span>
                <PlusCircleIcon className="h-6 w-6" />
              </span>
            </button>
          );
        }}
      </CldUploadWidget>

      <Dialog open={openConfirmation} onOpenChange={setOpenConfirmation}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogHeader>Save photo</DialogHeader>
          </DialogHeader>
          <div className="flex flex-col gap-6">
            <div className="w-full flex justify-center">
              <div className="relative w-2/3 h-72">
                <Image
                  src={imageUploaded?.url!}
                  alt="new photo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <ul className="flex flex-row justify-around pt-4 w-full">
              <li>
                <input
                  type="checkbox"
                  id="new_street"
                  className="hidden peer"
                  value="new_street"
                  onChange={() => updateTags("new_street")}
                />
                <label
                  htmlFor="new_street"
                  className="px-2 py-1 rounded-lg border-2 border-cyan-300 peer-checked:bg-cyan-300 cursor-pointer hover:bg-cyan-300 duration-75 ease-in"
                >
                  Street
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="new_portait"
                  className="hidden peer"
                  value="new_portait"
                  onChange={() => updateTags("new_portait")}
                />
                <label
                  htmlFor="new_portait"
                  className="px-2 py-1 rounded-lg border-2 border-indigo-300 peer-checked:bg-indigo-300 cursor-pointer hover:bg-indigo-300 duration-75 ease-in"
                >
                  Portrait
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="new_studio"
                  className="hidden peer"
                  value="new_studio"
                  onChange={() => updateTags("new_studio")}
                />
                <label
                  htmlFor="new_studio"
                  className="px-2 py-1 rounded-lg border-2 border-rose-300 peer-checked:bg-rose-300 cursor-pointer hover:bg-rose-300 duration-75 ease-in"
                >
                  Studio
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="new_boudoir"
                  className="hidden peer"
                  value="new_boudoir"
                  onChange={() => updateTags("new_boudoir")}
                />
                <label
                  htmlFor="new_boudoir"
                  className="px-2 py-1 rounded-lg border-2 border-pink-300 peer-checked:bg-pink-300 cursor-pointer hover:bg-pink-300 duration-75 ease-in"
                >
                  Boudoir
                </label>
              </li>
            </ul>
            <button
              className="px-3 py-2 bg-sky-200 disabled:bg-slate-200 rounded-lg hover:scale-105 hover:bg-sky-300 duration-75 ease-in"
              disabled={!imageUploaded?.public_id}
              onClick={async () => {
                await addImageTags(imageUploaded?.public_id!, selectedTags);
                setOpenConfirmation(false);
                setImageUploaded(null);
                setSelectedTags([]);
              }}
            >
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
