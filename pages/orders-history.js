import Layout from "../components/Layout";
import OrderHistoryTable from "../components/OrderHistoryTable";

const OrdersHistory = () => {
  return (
    <Layout title={"Orders History"}>
      <div className="mt-8 w-full  rounded-lg ">
        <OrderHistoryTable />
      </div>
    </Layout>
  );
};

export default OrdersHistory;
