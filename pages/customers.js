import Card from "../components/Card";
import CustomerTable from "../components/CustomerTable";
import Layout from "../components/Layout";
import Chart from "../components/LineChart";
import OrderHistoryTable from "../components/OrderHistoryTable";
import { useRouter } from "next/router";

const Customers = () => {
  const router = useRouter();

  return (
    <Layout title={"Customers"}>
      <div className="mt-8 w-full  rounded-lg ">
        <button
          className="w-[15rem] bg-blue-500 h-12 text-white rounded-md mb-8"
          onClick={() => router.push("/add-customer")}
        >
          Add New Customer
        </button>
        <CustomerTable />
      </div>
    </Layout>
  );
};

export default Customers;
