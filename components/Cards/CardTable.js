import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// components

const fetchUsers = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/users");
    console.log(res.data.users);
    return res.data.users;
  } catch (error) {
    console.error("Error fetching Users:", error);
    throw error;
  }
};

export default function CardTable({ color }) {
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "FirstName",
      accessorKey: "firstName",
    },
    {
      header: "LastName",
      accessorKey: "lastName",
    },

    {
      header: "Age",
      accessorKey: "age",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Phone",
      accessorKey: "phone",
    },

    {
      header: "BirthDate",
      accessorKey: "birthDate",
    },
  ];
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  const table = useReactTable({
    data: data || [], // Ensure data is not null
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },

    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,
    getSortedRowModel: getSortedRowModel(),
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap text-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                User Table
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead
              className={
                "px-6 align-middle border border-solid py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
              }
            >
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          <span>
                            {
                              {
                                asc: "🔼",
                                desc: "🔽",
                              }[header.column.getIsSorted() ?? null]
                            }
                          </span>
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody
              className={
                "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
              }
            >
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="pt-20">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className={
            " flex justify-around mt-5  pb-5  " +
            (color === "light"
              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
              : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
          }
        >
          <button
            className=" px-4 mt-5 pt-2 pb-2 pl-2 pr-2   rounded"
            onClick={() => table.setPageIndex(0)}
          >
            First Page
          </button>
          <button
            className=" px-4 mt-5 pt-2 pb-2 pl-2 pr-2   rounded"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage(0)}
          >
            Previous Page
          </button>
          <button
            className=" px-4 mt-5 pt-2 pb-2 pl-2 pr-2   rounded"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            Next Page
          </button>
          <button
            className=" px-4 mt-5 pt-2 pb-2 pl-2 pr-2   rounded"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            Last Page
          </button>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
