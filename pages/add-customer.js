import Card from "../components/Card";
import CustomerTable from "../components/CustomerTable";
import Layout from "../components/Layout";
import Chart from "../components/LineChart";
import OrderHistoryTable from "../components/OrderHistoryTable";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import registerApi from "../api/register";

const AddCustomer = () => {
  const [cookie, setCookie] = useCookies(["id"]);
  const [country, setCountry] = useState("AFN");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  const MySwal = withReactContent(Swal);

  const handleLogin = async (username, phone, password, amount) => {
    setIsLoading(true);
    const res = await registerApi(
      cookie["token"],
      cookie["id"],
      username,
      phone,
      password,
      amount,
      country,
      "user"
    );

    if (res.status === "success") {
      setIsLoading(false);
      await MySwal.fire({
        title: "User created successfully",
        icon: "success",
      });
    } else {
      setIsLoading(false);
      await MySwal.fire({
        title: res.message,
        icon: "error",
      });
    }
  };

  const onSubmit = async (data) => {
    handleLogin(data.username, data.phone, data.password, data.amount);
  };

  return (
    <Layout title={"Add Customer"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 bg-white w-full box-shadow rounded-lg p-8 mb-8"
      >
        <div className="flex flex-col gap-6">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            className="max-w-[20rem]"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-xs text-red-600">Username is required</span>
          )}
          <TextField
            id="outlined-basic"
            label="Phone Number"
            type="number"
            variant="outlined"
            className="max-w-[20rem]"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-xs text-red-600">
              Phone number is required
            </span>
          )}
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            className="max-w-[20rem]"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-xs text-red-600">Password is required</span>
          )}
          <TextField
            id="outlined-basic"
            label="Amount"
            type="number"
            variant="outlined"
            className="max-w-[20rem]"
            {...register("amount", { required: true })}
          />
          {errors.amount && (
            <span className="text-xs text-red-600">Amount is required</span>
          )}
          <FormControl className="max-w-[20rem]">
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={country}
              label="Country"
              onChange={(e) => setCountry(e.target.value)}
            >
              <MenuItem value={"AFN"}>AFN</MenuItem>
              <MenuItem value={"TL"}>TL</MenuItem>
            </Select>
          </FormControl>
          <button
            type="submit"
            className="max-w-[20rem] bg-blue-500 h-12 text-white rounded-md"
          >
            {isLoading ? (
              <CircularProgress style={{ color: "white" }} size="20px" />
            ) : (
              "Add Customer"
            )}
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default AddCustomer;
