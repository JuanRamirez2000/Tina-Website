"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ResourceApiResponse } from "cloudinary";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import EditPhotoModal from "./EditPhotoModal";
import DeletePhotoModal from "./DeletePhotoModal";
import { Button } from "@/components/ui/button";

export type Photos = ResourceApiResponse["resources"][0];

export const columns: ColumnDef<Photos>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "delete",
    header: () => {
      return <TrashIcon className="h-6 w-6" />;
    },
    cell: ({ row }) => {
      return <DeletePhotoModal row={row} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "edit",
    header: () => {
      return <PencilSquareIcon className="h-6 w-6" />;
    },
    cell: ({ row }) => {
      return <EditPhotoModal row={row} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "url",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.original.url;
      return (
        <Image
          src={imageUrl}
          alt=""
          height={0}
          width={0}
          sizes="100vw"
          className="rounded-md w-32 h-auto"
        />
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Uploaded At
          {column.getIsSorted() === "asc" && (
            <ArrowUpIcon className="ml-2 h-4 w-4" />
          )}
          {column.getIsSorted() === "desc" && (
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          )}
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <p>
          {new Date(row.original.created_at).toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      );
    },
  },
  {
    accessorKey: "tags",
    header: "Tags",
    filterFn: (row, _, filterValue) => {
      if (!filterValue || filterValue.length === 0) return true;
      return row.original.tags.some((tag) => filterValue.includes(tag));
    },
    cell: ({ row }) => {
      const tags = row.original.tags;
      return (
        <ul className="flex flex-row gap-2">
          {tags?.map((tag) => (
            <li
              key={tag}
              className={`px-3 py-1.5 rounded-lg ${getTagColorByName(tag)}`}
            >
              {tag}
            </li>
          ))}
        </ul>
      );
    },
  },
];

const getTagColorByName = (tagName: string) => {
  switch (tagName) {
    case "street":
      return "bg-cyan-300";
    case "portait":
      return "bg-indigo-300";
    case "studio":
      return "bg-rose-300";
    case "boudoir":
      return "bg-pink-300";
    default:
      return "bg-yellow-300";
  }
};
