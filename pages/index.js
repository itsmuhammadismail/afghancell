import Card from "../components/Card";
import Layout from "../components/Layout";
import Chart from "../components/LineChart";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-wrap gap-6">
        <Card
          color="#f2416d"
          title="Orders"
          value={20143}
          icon="/icons/order.svg"
        />
        <Card
          color="#fd7e14"
          title="Customers"
          value={20143}
          icon="/icons/customer.svg"
        />
        <Card
          color="#009ef7"
          title="Total Amount"
          value={20143}
          icon="/icons/amount.svg"
        />
        <Card
          color="#50cd89"
          title="Total Spend"
          value={20143}
          icon="/icons/spend.svg"
        />
      </div>
      <div className="mt-8 bg-white w-full h-[25rem] box-shadow rounded-lg p-8">
        <Chart />
      </div>
    </Layout>
  );
};

export default Home;
