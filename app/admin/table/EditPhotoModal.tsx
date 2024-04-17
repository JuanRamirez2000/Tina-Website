"use client";

import { Row } from "@tanstack/react-table";
import { Photos } from "./columns";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { updateImageTags } from "@/app/actions/imageActions";

export default function EditPhotoModal({ row }: { row: Row<Photos> }) {
  const [selectedTags, setSelectedTags] = useState<string[]>(
    row.original.tags ? row.original.tags : []
  );
  const [openEditImageModal, setOpenEditImageModal] = useState<boolean>(false);

  const updateTags = (tagName: string) => {
    if (!selectedTags.includes(tagName)) {
      setSelectedTags([...selectedTags, tagName]);
    } else {
      const newTags = selectedTags.filter((tag) => tag !== tagName);
      setSelectedTags(newTags);
    }
  };

  return (
    <Dialog open={openEditImageModal} onOpenChange={setOpenEditImageModal}>
      <DialogTrigger>
        <PencilSquareIcon className="h-6 w-6 text-emerald-400 cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>EditPhoto</DialogHeader>
        <div className="w-full h-[32rem] relative">
          <Image
            src={row.original.url}
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <ul className="flex flex-row gap-2 pt-4">
          <li>
            <input
              type="checkbox"
              id="edit_Street"
              className="hidden peer"
              value="edit_Street"
              defaultChecked={row.original.tags.includes("street")}
              onChange={() => updateTags("street")}
            />
            <label
              htmlFor="edit_Street"
              className="px-2 py-1 rounded-lg border-2 border-cyan-300 peer-checked:bg-cyan-300 cursor-pointer"
            >
              Street
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="edit_Portait"
              className="hidden peer"
              value="edit_Portait"
              defaultChecked={row.original.tags.includes("portait")}
              onChange={() => updateTags("portait")}
            />
            <label
              htmlFor="edit_Portait"
              className="px-2 py-1 rounded-lg border-2 border-indigo-300 peer-checked:bg-indigo-300 cursor-pointer"
            >
              Portrait
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="edit_Studio"
              className="hidden peer"
              value="edit_Studio"
              defaultChecked={row.original.tags.includes("studio")}
              onChange={() => updateTags("studio")}
            />
            <label
              htmlFor="edit_Studio"
              className="px-2 py-1 rounded-lg border-2 border-rose-300 peer-checked:bg-rose-300 cursor-pointer"
            >
              Studio
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="edit_boudoir"
              className="hidden peer"
              value="edit_boudoir"
              defaultChecked={row.original.tags.includes("boudoir")}
              onChange={() => updateTags("boudoir")}
            />
            <label
              htmlFor="edit_boudoir"
              className="px-2 py-1 rounded-lg border-2 border-pink-300 peer-checked:bg-pink-300 cursor-pointer"
            >
              Boudoir
            </label>
          </li>
        </ul>
        <button
          className="bg-green-200 rounded-lg px-3 py-2"
          onClick={async () => {
            await updateImageTags(row.original.public_id, selectedTags);
            setOpenEditImageModal(false);
          }}
        >
          Save
        </button>
      </DialogContent>
    </Dialog>
  );
}