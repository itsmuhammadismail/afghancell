import Card from "../components/Card";
import CustomerTable from "../components/CustomerTable";
import Layout from "../components/Layout";
import Chart from "../components/LineChart";
import OrderHistoryTable from "../components/OrderHistoryTable";

const Customers = () => {
  return (
    <Layout title={"Customers"}>
      <div className="mt-8 bg-white w-full  rounded-lg ">
        <CustomerTable />
      </div>
    </Layout>
  );
};

export default Customers;
