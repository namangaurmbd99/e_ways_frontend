import React from "react";
import { COLUMNS } from "./columns";
import ListRecords from "components/ListRecords";
import { get } from "services/api";

const CustomerList = () => {
  const makeApiCall = async (page) => {
    try {
      const response = await get(`/customers?page=${page}`);
      const { customers, pagination } = response.data;
      const { total_pages } = pagination;

      return { data: customers, total_pages };
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

export default CustomerList;
