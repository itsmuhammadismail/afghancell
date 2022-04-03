import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ACHead from "../components/ACHead";
import Layout from "../components/Layout";
import Chart from "../components/LineChart";
import OrderHistoryTable from "../components/OrderHistoryTable";
import { useEffect, useRef } from "react";

const Login = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="flex w-screen h-screen">
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
        <div className="w-[30rem] bg-[#ececec] flex flex-col gap-6 justify-center items-center shadow-lg py-[6rem] rounded-lg">
          <img src="/logo.svg" alt="" className="w-[10rem]" />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="w-[20rem]"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className="w-[20rem]"
          />
          <Button
            variant="contained"
            size="large"
            className="w-[20rem] bg-blue-500 p-3"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
