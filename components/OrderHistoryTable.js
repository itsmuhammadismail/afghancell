import MUIDataTable from "mui-datatables";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import getOrderHistoryApi from "../api/get_order_history";

const columns = [
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
];

const data = [
  {
    name: "Khalilrrahman nazari",
    no: "773355216",
    date: "2022-02-08 08:07:37",
    credit: "150",
  },
  {
    name: "Khalilrrahman nazari",
    no: "773355216",
    date: "2022-02-08 08:07:37",
    credit: "150",
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
    name: "Khalilrrahman nazari",
    no: "773355216",
    date: "2022-02-08 08:07:37",
    credit: "150",
  },
];

const options = {
  filterType: "checkbox",
};

const OrderHistoryTable = () => {
  const [data, setData] = useState(null);
  const [cookie] = useCookies(["token"]);

  const fetchData = async () => {
    const res = await getOrderHistoryApi(cookie["token"]);
    console.log(res);
    let data = [];
    res.map((r) => {
      console.log(r);
      let datetime = r.createdAt;
      let [date, time] = datetime.split("T");
      data.push({
        name: r.user.username,
        no: r.user.phone_number,
        date: `${date} ${time.slice(0, 8)}`,
        credit: r.credit,
      });
    });
    setData(data);
  };

  useEffect(() => fetchData(), []);
  return data ? (
    <MUIDataTable
      title={"Order History"}
      data={data}
      columns={columns}
      options={options}
    />
  ) : (
    <div className="h-[20rem] flex justify-center items-center">
      <CircularProgress />
    </div>
  );
};

export default OrderHistoryTable;
