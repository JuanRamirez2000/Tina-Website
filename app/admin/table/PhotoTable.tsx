"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function PhotoTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      rowSelection,
      columnFilters,
    },
  });

  const updateTagsFilter = (tagName: string) => {
    const filter = columnFilters.find((filter) => filter.id === "tags");

    //Only if no value
    if (!filter) {
      setColumnFilters([
        {
          id: "tags",
          value: [tagName],
        },
      ]);
    }
    const values = filter?.value as string[];
    if (values) {
      if (values.some((tag) => tag === tagName)) {
        const newValues = values.filter((tag) => tag !== tagName);
        setColumnFilters([
          {
            id: "tags",
            value: newValues,
          },
        ]);
      } else {
        setColumnFilters([
          {
            id: "tags",
            value: [...values, tagName],
          },
        ]);
      }
    }
  };

  return (
    <div>
      <ul className="flex flex-row gap-2 py-4">
        <li>
          <input
            type="checkbox"
            id="street"
            className="hidden peer"
            value="street"
            onChange={() => updateTagsFilter("street")}
          />
          <label
            htmlFor="street"
            className="px-2 py-1 rounded-lg border-2 border-cyan-300 peer-checked:bg-cyan-300 cursor-pointer"
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
            onChange={() => updateTagsFilter("portait")}
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
            onChange={() => updateTagsFilter("studio")}
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
            onChange={() => updateTagsFilter("boudoir")}
          />
          <label
            htmlFor="boudoir"
            className="px-2 py-1 rounded-lg border-2 border-pink-300 peer-checked:bg-pink-300 cursor-pointer"
          >
            Boudoir
          </label>
        </li>
      </ul>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
