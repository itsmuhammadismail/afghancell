import Card from "../../components/Card";
import CustomerTable from "../../components/CustomerTable";
import Layout from "../../components/Layout";
import Chart from "../../components/LineChart";
import OrderHistoryTable from "../../components/OrderHistoryTable";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { parseCookies } from "../../helpers";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import changePasswordApi from "../../api/change_password";
import ClearIcon from "@mui/icons-material/Clear";
import { CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const UpdateUsernamePassword = () => {
  const ref = useRef(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const [cookie, setCookie] = useCookies(["token"]);

  const [isLoading, setIsLoading] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  const MySwal = withReactContent(Swal);

  const handleLogin = async (password) => {
    setIsLoading(true);
    const res = await changePasswordApi(
      cookie["token"],
      cookie["id"],
      password
    );
    console.log(res);

    if (res.status === "success") {
      setIsLoading(false);
      await MySwal.fire({
        title: "Password Changed Successfully",
        icon: "success",
      });
    } else {
      setIsLoading(false);
      await MySwal.fire({
        title: "Something went wrong",
        icon: "error",
      });
    }
  };

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setIncorrect(true);
      setTimeout(() => {
        setIncorrect(false);
      }, 2000);
    } else handleLogin(data.password);
  };

  return (
    <Layout title={"Update Username and Password"}>
      <form
        className="mt-8 bg-white w-full box-shadow rounded-lg p-8 mb-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col ">
          {incorrect && (
            <div
              className="flex w-[20rem] justify-between  items-center border-2 border-red-500 px-3 py-2 text-red-500 rounded-md mb-3"
              onClick={() => setIncorrect(false)}
            >
              <small>Password and Confirm Password not match</small>
              <ClearIcon fontSize="small" className="cursor-pointer" />
            </div>
          )}
          <TextField
            id="outlined-basic"
            label="Username"
            type="text"
            variant="outlined"
            className="max-w-[20rem] my-2 "
            {...register("username")}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            className="max-w-[20rem] my-2 "
            {...register("password")}
          />
          
          <button
            className="max-w-[20rem] bg-blue-500 h-12 text-white rounded-md my-2 "
            type="submit"
          >
            {isLoading ? (
              <CircularProgress style={{ color: "white" }} size="20px" />
            ) : (
              "Update"
            )}
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default UpdateUsernamePassword;
