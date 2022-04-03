import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "id",
    label: "Customer ID",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "name",
    label: "Customer Name",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "account",
    label: "Account",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "actions",
    label: "Actions",
    options: {
      filter: true,
      sort: false,
    },
  },
];

const data = [
  {
    id: "13546",
    name: "Khalilrrahman nazari",
    account: "320",
    actions: "",
  },
  {
    id: "13546",
    name: "Khalilrrahman nazari",
    account: "320",
    actions: "",
  },
  {
    id: "13546",
    name: "Khalilrrahman nazari",
    account: "320",
    actions: "",
  },
  {
    id: "13546",
    name: "Khalilrrahman nazari",
    account: "320",
    actions: "",
  },
];

const options = {
  filterType: "checkbox",
};

const CustomerTable = () => {
  return (
    <MUIDataTable
      title={"Order History"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default CustomerTable;
