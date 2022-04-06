import { CircularProgress } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import getUsersApi from "../api/get_users";
import { useCookies } from "react-cookie";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import ReceiptIcon from "@mui/icons-material/Receipt";
import GroupIcon from "@mui/icons-material/Group";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import getSubUserApi from "../api/get_subusers";

const columns = [
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

const options = {
  filterType: "checkbox",
};

const SubCustomerTable = (id) => {
  const [data, setData] = useState(null);
  const [cookie] = useCookies(["token"]);
  const router = useRouter();

  const fetchData = async () => {
    const res = await getSubUserApi(cookie["token"], id["id"]);
    console.log(res);
    let data = [];
    res.map((r) => {
      console.log(r);

      data.push({
        name: r.username,
        account: (
          <div style={{ color: r.amount <= 0 ? "red" : "green" }}>
            {r.amount}
          </div>
        ),
        actions: (
          <div className="flex gap-4">
            <InfoIcon />
            <SettingsIcon />
          </div>
        ),
      });
    });
    setData(data);
  };

  useEffect(() => fetchData(), []);
  return data ? (
    <MUIDataTable
      title={"Sub Customers"}
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

export default SubCustomerTable;
