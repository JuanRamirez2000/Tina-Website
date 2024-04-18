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
import { deleteImage } from "@/app/actions/imageActions";

export default function DeletePhotoModal({ row }: { row: Row<Photos> }) {
  return (
    <Dialog>
      <DialogTrigger>
        <TrashIcon className="h-6 w-6 text-red-400 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>Delete Photo</DialogHeader>
        <Image
          src={row.original.url}
          alt=""
          height={0}
          width={0}
          sizes="100vw"
          className="object-cover rounded-lg h-[32rem] w-auto"
        />
        <button
          className="bg-red-200 rounded-lg px-3 py-2 hover:bg-red-300 duration-75 ease-in hover:scale-105"
          onClick={async () => await deleteImage(row.original.public_id)}
        >
          Delete
        </button>
      </DialogContent>
    </Dialog>
  );
}
