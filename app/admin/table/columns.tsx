import { ColumnDef } from "@tanstack/react-table";

import { ResourceApiResponse } from "cloudinary";

export type Photos = ResourceApiResponse["resources"][0];

export const columns: ColumnDef<Photos>[] = [
  {
    accessorKey: "url",
    header: "URL",
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
];
