import React from "react";
import { COLUMNS } from "./columns";
import ListRecords from "components/ListRecords";
import { get } from "services/api";

const LocationsList = () => {
  const makeApiCall = async (page) => {
    try {
      const response = await get(`/locations?page=${page}`);
      const { locations, pagination } = response.data;
      const { total_pages } = pagination;

      return { data: locations, total_pages };
    } catch (error) {
      console.error("There was an error fetching the carriers!", error);
      throw error;
    }
  };

  return (
    <>
      <ListRecords columns={COLUMNS} makeApiCall={makeApiCall} />
    </>
  );
};

export default LocationsList;
