import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ACHead from "../components/ACHead";
import Layout from "../components/Layout";
import Chart from "../components/LineChart";
import OrderHistoryTable from "../components/OrderHistoryTable";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import loginApi from "../api/login";
import { useRouter } from "next/router";
import { parseCookies } from "../helpers/";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const Login = () => {
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

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  const handleLogin = async (username, password) => {
    setIsLoading(true);
    const res = await loginApi(username, password);
    console.log(res);

    if ("token" in res) {
      localStorage.setItem("token", res.token);
      setCookie("token", res["token"], {
        path: "/",
        maxAge: 7200, // Expires after 2hr
        sameSite: true,
      });
      setCookie("id", res["_id"], {
        path: "/",
        maxAge: 7200, // Expires after 2hr
        sameSite: true,
      });

      router.push("/");
    } else {
      setIsLoading(false);
      setIncorrect(true);
      setTimeout(() => {
        setIncorrect(false);
      }, 2000);
    }
  };

  const onSubmit = async (data) => {
    handleLogin(data.username, data.password);
    console.log(data.username);
  };

  return (
    <form className="flex w-screen h-screen" onSubmit={handleSubmit(onSubmit)}>
      <ACHead />
      <div className="flex-1 flex justify-evenly items-center">
        {/* <img src="/login.svg" alt="" className="h-full p-[5rem]" /> */}
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://assets7.lottiefiles.com/private_files/lf30_fw6h59eu.json"
          style={{ width: "500px", height: "500px", paddingp: "5rem" }}
          className=" p-[5rem] "
        ></lottie-player>
        <div className="w-[30rem] bg-[#ececec] flex flex-col justify-center items-center shadow-lg py-[6rem] rounded-lg">
          <img src="/logo.svg" alt="" className="w-[10rem]" />
          {incorrect && (
            <div
              className="flex w-[20rem] justify-between items-center self-center border-2 border-red-500 px-3 py-2 text-red-500 rounded-md mb-3"
              onClick={() => setIncorrect(false)}
            >
              <small>Incorrect username or password. please try again!</small>
              <ClearIcon fontSize="small" className="cursor-pointer" />
            </div>
          )}
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            className="w-[20rem] my-2 "
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-xs text-red-600">Username is required</span>
          )}
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            className="w-[20rem] my-2 "
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-xs text-red-600">Password is required</span>
          )}
          <button
            variant="contained"
            size="large"
            className="w-[20rem] bg-blue-500 p-3 my-2 text-white"
            onClick={loginApi}
            type="submit"
          >
            {isLoading ? (
              <CircularProgress style={{ color: "white" }} size="20px" />
            ) : (
              "Sign In"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
