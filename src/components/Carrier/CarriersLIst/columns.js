export const COLUMNS = [
  {
    Header: 'Description',
    accessor: 'description',
  },
  {
    Header: 'Active',
    accessor: 'is_active',
    Cell: ({ value }) => (value ? "Yes" : "No"),
  },
]