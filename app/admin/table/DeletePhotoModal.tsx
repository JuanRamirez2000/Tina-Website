"use client";
import { Row } from "@tanstack/react-table";
import { Photos } from "./columns";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function DeletePhotoModal({ row }: { row: Row<Photos> }) {
  return (
    <Dialog>
      <DialogTrigger>
        <TrashIcon className="h-6 w-6 text-red-400 cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Delete Photo</DialogHeader>
        <div className="w-full h-[32rem] relative">
          <Image
            src={row.original.url}
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <button className="bg-red-200 rounded-lg px-3 py-2">Delete</button>
      </DialogContent>
    </Dialog>
  );
}
