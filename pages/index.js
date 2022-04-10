import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import getTotalOrdersApi from "../api/get_total_order";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Chart from "../components/LineChart";
import OrderHistoryTable from "../components/OrderHistoryTable";

const Home = () => {
  const [cookie, setCookie] = useCookies(["token"]);
  const [orders, setOrders] = useState(null);
  const [customers, setCustomers] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [totalSpend, setTotalSpend] = useState(null);

  const fetchData = async () => {
    const res = await getTotalOrdersApi(cookie["token"]);
    setOrders(res.totalorder);
    setCustomers(res.user);
    setTotalAmount(res.debit);
    setTotalSpend(res.credit);
  };

  useEffect(() => fetchData(), []);

  return (
    <Layout title={"Dashboard"}>
      <div className="flex flex-wrap gap-6">
        {orders && (
          <Card
            color="#f2416d"
            title="Orders"
            value={orders}
            icon="/icons/order.svg"
          />
        )}
        {customers && (
          <Card
            color="#fd7e14"
            title="Customers"
            value={customers}
            icon="/icons/customer.svg"
          />
        )}
        {totalAmount && (
          <Card
            color="#009ef7"
            title="Total Amount"
            value={totalAmount}
            icon="/icons/amount.svg"
          />
        )}
        {totalSpend && (
          <Card
            color="#50cd89"
            title="Total Spend"
            value={totalSpend}
            icon="/icons/spend.svg"
          />
        )}
      </div>
      <div className="mt-8 w-full  rounded-lg ">
        <OrderHistoryTable />
      </div>
      <div className="mt-8 bg-white w-full h-[25rem] box-shadow rounded-lg p-8 mb-8">
        <Chart />
      </div>
    </Layout>
  );
};

export default Home;
