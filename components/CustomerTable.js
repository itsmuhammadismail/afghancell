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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import deleteUserApi from "../api/delete_user";

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

const CustomerTable = () => {
  const [data, setData] = useState(null);
  const [cookie] = useCookies(["token"]);
  const router = useRouter();

  const MySwal = withReactContent(Swal);

  const fetchData = async () => {
    const res = await getUsersApi(cookie["token"]);
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
            <SettingsIcon
              onClick={() => router.push(`/update-username-password/${r._id}`)}
            />
            <ReceiptIcon />
            <GroupIcon onClick={() => router.push(`/subusers/${r._id}`)} />
            <CloseIcon
              onClick={async () =>
                Swal.fire({
                  title: "Delete User",
                  text: "Are you sure you want to delete this user?",
                  showCancelButton: true,
                  confirmButtonText: "Delete",
                }).then(async (result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                    const res = await deleteUserApi(cookie["token"], r._id);
                    if (res.status === "success") {
                      Swal.fire({
                        icon: "success",
                        text: "User Deleted Successfully",
                      });
                      setData(null);
                      fetchData();
                    } else {
                      Swal.fire({
                        icon: "error",
                        text: "Something went wrong",
                      });
                    }
                  }
                })
              }
            />
          </div>
        ),
      });
    });
    setData(data);
  };

  useEffect(() => fetchData(), []);
  return data ? (
    <MUIDataTable
      title={"Customers"}
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

export default CustomerTable;
