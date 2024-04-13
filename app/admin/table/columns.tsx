"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ResourceApiResponse } from "cloudinary";
import { Checkbox } from "@/components/ui/checkbox";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

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
    cell: () => {
      return <TrashIcon className="h-6 w-6 text-red-400 cursor-pointer" />;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "edit",
    header: () => {
      return <PencilSquareIcon className="h-6 w-6" />;
    },
    cell: () => {
      return (
        <PencilSquareIcon className="h-6 w-6 text-emerald-400 cursor-pointer" />
      );
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
          height={75}
          width={75}
          className="rounded-md"
        />
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
