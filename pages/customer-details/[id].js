import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import getSingleUserApi from "../../api/get_single_user";
import updateAmountApi from "../../api/update_amount";

const CustomerDetails = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  const [cookie, setCookie] = useCookies(["id"]);

  const [isLoading, setIsLoading] = useState(false);
  const MySwal = withReactContent(Swal);

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [originalAmount, setOriginalAmount] = useState("");
  const [disableAmount, setDisableAmount] = useState(true);
  const [newAmount, setNewAmount] = useState(0);

  const fetchData = async () => {
    const res = await getSingleUserApi(cookie["token"], id);

    setUsername(res.username);
    setPhone(res.phone_number);
    setOriginalAmount(res.amount);
    setAmount(res.amount);
  };

  useEffect(() => id != undefined && fetchData(), [id]);

  const edit = () => {
    setDisableAmount(false);
    setNewAmount(0);
  };
  const add = () => {
    setDisableAmount(false);
    setAmount(0);
    setNewAmount(+originalAmount);
  };
  const cancel = () => {
    setDisableAmount(true);
    setAmount(+originalAmount);
    setNewAmount(0);
  };
  const save = async () => {
    let theAmount = +newAmount + +amount;
    setDisableAmount(true);
    setAmount(theAmount);
    setNewAmount(0);
    setOriginalAmount(theAmount);
    const res = await updateAmountApi(cookie["token"], id, theAmount);
  };

  return (
    <Layout title={"Customer Details"}>
      <div className="mt-8 bg-white w-full box-shadow rounded-lg p-8 mb-8">
        <div className="flex flex-col gap-6">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            className="max-w-[20rem]"
            disabled
          />

          <TextField
            id="outlined-basic"
            label="Phone Number"
            type="number"
            variant="outlined"
            value={phone}
            className="max-w-[20rem]"
            disabled
          />

          <TextField
            id="outlined-basic"
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            variant="outlined"
            className="max-w-[20rem]"
            disabled={disableAmount}
          />

          {disableAmount ? (
            <div className="max-w-[20rem] flex gap-4">
              <button
                className="flex-1 bg-blue-500 h-12 text-white rounded-md"
                onClick={edit}
              >
                Edit
              </button>
              <button
                className="flex-1 bg-blue-500 h-12 text-white rounded-md"
                onClick={add}
              >
                Add
              </button>
            </div>
          ) : (
            <div className="max-w-[20rem] flex gap-4">
              <button
                className="flex-1 bg-blue-500 h-12 text-white rounded-md"
                onClick={save}
              >
                Save
              </button>
              <button
                className="flex-1 bg-blue-500 h-12 text-white rounded-md"
                onClick={cancel}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CustomerDetails;
