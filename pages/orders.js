import Layout from "../components/Layout";
import OrderHistoryTable from "../components/OrderHistoryTable";

const OrdersHistory = () => {
  return (
    <Layout title={"Orders"}>
      <div className="mt-8 bg-white w-full  rounded-lg ">
        <OrderHistoryTable />
      </div>
    </Layout>
  );
};

export default OrdersHistory;
