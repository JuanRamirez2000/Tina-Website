"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export default function NewPhotoControl() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
      <DialogTrigger className="w-fit px-4 py-3 bg-slate-50 rounded-xl flex flex-row justify-center gap-2 items-center hover:bg-slate-100 cursor-pointer hover:scale-105 duration-75 transition-all">
        <p>Add photos</p>
        <span>
          <PlusCircleIcon className="h-6 w-6" />
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogHeader>Add a photo</DialogHeader>
        </DialogHeader>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
        <div>
          <ul className="flex flex-row gap-2 pt-4">
            <li>
              <input
                type="checkbox"
                id="street"
                className="hidden peer"
                value="street"
                onChange={() => updateTags("street")}
              />
              <label
                htmlFor="street"
                className="px-2 py-1 rounded-lg border-2 border-cyan-300 peer-checked:bg-cyan-300 cursor-pointer "
              >
                Street
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="portrait"
                className="hidden peer"
                value="portrait"
                onChange={() => updateTags("portait")}
              />
              <label
                htmlFor="portrait"
                className="px-2 py-1 rounded-lg border-2 border-indigo-300 peer-checked:bg-indigo-300 cursor-pointer"
              >
                Portrait
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="studio"
                className="hidden peer"
                value="studio"
                onChange={() => updateTags("studio")}
              />
              <label
                htmlFor="studio"
                className="px-2 py-1 rounded-lg border-2 border-rose-300 peer-checked:bg-rose-300 cursor-pointer"
              >
                Studio
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="boudoir"
                className="hidden peer"
                value="boudoir"
                onChange={() => updateTags("boudoir")}
              />
              <label
                htmlFor="boudoir"
                className="px-2 py-1 rounded-lg border-2 border-pink-300 peer-checked:bg-pink-300 cursor-pointer"
              >
                Boudoir
              </label>
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
