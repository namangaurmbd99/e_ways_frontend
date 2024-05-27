import React, { useEffect, useState } from "react";
import { Container, Typography, Box, CircularProgress, Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { get } from "services/api";

export default function CarrierLIst() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    const fetchCarriers = (page) => {
      setIsLoading(true);
      get(`/carriers/?page=${page + 1}`)
        .then((response) => {
          const carriers = response.data.carriers;
          const total_entries = response.data.pagination.total_entries;
          setRecords([...records, { page_number: page, data: carriers }]);
          setTotalRecords(total_entries);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("There was an error fetching the carriers!", error);
          setIsLoading(false);
        });
    };

    fetchCarriers(page);
  }, [page]);

  const handlePageChange = (params) => {
    setPage(params.page);
  }

  // Columns to display
  const columns = [
    { field: "description", headerName: "Description", width: 250 },
    { field: "is_active", headerName: "Active", width: 150, type: "boolean" },
  ];

  // Ensure that each row has a unique id by setting `id` field from the original object
  const rows = (records.flatMap(obj => obj.data)).map((carrier, index) => ({
    id: carrier.id,
    description: carrier.description,
    is_active: carrier.is_active,
  }));
  console.log("Rows:", rows); // Add this line to log the rows array

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        paginationMode="server"
        rowCount={totalRecords}
        onPaginationModelChange={handlePageChange}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
