import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import TransactionHistoryTable from "../../components/TransactionHistoryTable";

const TransactionHistory = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout title={"Transaction History"}>
      <div className="mt-8 w-full  rounded-lg ">
        {id != undefined && <TransactionHistoryTable id={id} />}
      </div>
    </Layout>
  );
};

export default TransactionHistory;
