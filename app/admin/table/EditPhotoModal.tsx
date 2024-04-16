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

export default function EditPhotoModal({ row }: { row: Row<Photos> }) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  //!TODO - Fix this as well as ./AdminControls/NewPhotoControl
  const updateTags = (tagName: string) => {
    if (!selectedTags.includes(tagName)) {
      setSelectedTags([...selectedTags, tagName]);
    } else {
      const newTags = selectedTags.filter((tag) => tag === tagName);
      setSelectedTags(newTags);
    }
  };

  return (
    <Dialog>
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
              id="streetEdit"
              className="hidden peer"
              value="streetEdit"
              onChange={() => updateTags("street")}
            />
            <label
              htmlFor="streetEdit"
              className="px-2 py-1 rounded-lg border-2 border-cyan-300 peer-checked:bg-cyan-300 cursor-pointer"
            >
              Street
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="portraitEdit"
              className="hidden peer"
              value="portraitEdit"
              onChange={() => updateTags("portait")}
            />
            <label
              htmlFor="portraitEdit"
              className="px-2 py-1 rounded-lg border-2 border-indigo-300 peer-checked:bg-indigo-300 cursor-pointer"
            >
              Portrait
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="studioEdit"
              className="hidden peer"
              value="studioEdit"
              onChange={() => updateTags("studio")}
            />
            <label
              htmlFor="studioEdit"
              className="px-2 py-1 rounded-lg border-2 border-rose-300 peer-checked:bg-rose-300 cursor-pointer"
            >
              Studio
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="boudoirEdit"
              className="hidden peer"
              value="boudoirEdit"
              onChange={() => updateTags("boudoir")}
            />
            <label
              htmlFor="boudoirEdit"
              className="px-2 py-1 rounded-lg border-2 border-pink-300 peer-checked:bg-pink-300 cursor-pointer"
            >
              Boudoir
            </label>
          </li>
        </ul>
        <button className="bg-green-200 rounded-lg px-3 py-2">Save</button>
      </DialogContent>
    </Dialog>
  );
}
