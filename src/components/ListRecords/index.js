import React, { useEffect, useState, useMemo } from "react";
import { useTable } from "react-table";
import { CircularProgress, Pagination } from "@mui/material";
import { get } from "services/api";
import "./index.css";

const ListRecords = ({columns, path}) => {
  const [records, setRecords] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getValueFromSever = (page) => {
    setIsLoading(true);
    get(`${path}/?page=${page}`)
      .then((response) => {
        const { carriers, pagination } = response.data;
        const { total_pages } = pagination;
        setRecords({
          ...records,
          [page]: carriers,
        });
        setTotalPages(total_pages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the carriers!", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!([page] in records)) {
      // If the data for the page is not in the state(records), make a call to server.
      getValueFromSever(page);
    }
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  console.log(records);

  const tableInstance = useTable({
    columns: columns,
    data: records[page] ?? [],
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} key={column.id}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={row.index}>
                    {row.cells.map((cell, index) => {
                      return (
                        <td {...cell.getCellProps()} key={index}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pagination">
            <Pagination
              count={totalPages}
              color="primary"
              page={page}
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ListRecords;
