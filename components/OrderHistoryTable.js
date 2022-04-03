import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "id",
    label: "Order ID",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "name",
    label: "User Name",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "no",
    label: "Phone Number",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "date",
    label: "Order Date",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "credit",
    label: "Credit",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "status",
    label: "Status",
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
    no: "773355216",
    date: "2022-02-08 08:07:37",
    credit: "150",
    status: (
      <div className="bg-green-600 text-white flex justify-center items-center p-1">
        Approved
      </div>
    ),
  },
  {
    id: "13547",
    name: "Khalilrrahman nazari",
    no: "773355216",
    date: "2022-02-08 08:07:37",
    credit: "150",
    status: (
      <div className="bg-green-600 text-white flex justify-center items-center p-1">
        Approved
      </div>
    ),
  },
  {
    id: "13548",
    name: "Khalilrrahman nazari",
    no: "773355216",
    date: "2022-02-08 08:07:37",
    credit: "150",
    status: (
      <div className="bg-red-600 text-white flex justify-center items-center p-1">
        Rejected
      </div>
    ),
  },
  {
    id: "13549",
    name: "Khalilrrahman nazari",
    no: "773355216",
    date: "2022-02-08 08:07:37",
    credit: "150",
    status: (
      <div className="bg-green-600 text-white flex justify-center items-center p-1">
        Approved
      </div>
    ),
  },
  {
    id: "13510",
    name: "Khalilrrahman nazari",
    no: "773355216",
    date: "2022-02-08 08:07:37",
    credit: "150",
    status: (
      <div className="bg-green-600 text-white flex justify-center items-center p-1">
        Approved
      </div>
    ),
  },
  {
    id: "13511",
    name: "Khalilrrahman nazari",
    no: "773355216",
    date: "2022-02-08 08:07:37",
    credit: "150",
    status: (
      <div className="bg-green-600 text-white flex justify-center items-center p-1">
        Approved
      </div>
    ),
  },
];

const options = {
  filterType: "checkbox",
};

const OrderHistoryTable = () => {
  return (
    <MUIDataTable
      title={"Order History"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default OrderHistoryTable;
