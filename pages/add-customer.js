import Card from "../components/Card";
import CustomerTable from "../components/CustomerTable";
import Layout from "../components/Layout";
import Chart from "../components/LineChart";
import OrderHistoryTable from "../components/OrderHistoryTable";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";

const AddCustomer = () => {
  const [cookie, setCookie] = useCookies(["id"]);
  console.log(cookie["id"]);
  
  return (
    <Layout title={"Add Customer"}>
      <div className="mt-8 bg-white w-full box-shadow rounded-lg p-8 mb-8">
        <div className="flex flex-col gap-6">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            className="max-w-[20rem]"
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            type="password"
            variant="outlined"
            className="max-w-[20rem]"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            className="max-w-[20rem]"
          />
          <button className="max-w-[20rem] bg-blue-500 h-12 text-white rounded-md">
            Reset Password
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AddCustomer;
