import Card from "../components/Card";
import CustomerTable from "../components/CustomerTable";
import Layout from "../components/Layout";
import Chart from "../components/LineChart";
import OrderHistoryTable from "../components/OrderHistoryTable";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ResetPassword = () => {
  return (
    <Layout title={"Reset Password"}>
      <div className="mt-8 bg-white w-full box-shadow rounded-lg p-8 mb-8">
        <div className="flex flex-col gap-6">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className="max-w-[20rem]"
          />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            className="max-w-[20rem]"
          />
          <Button variant="contained" size="large" className="max-w-[20rem]">
            Reset Password
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
