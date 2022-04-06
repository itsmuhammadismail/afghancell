import CustomerTable from "../../components/CustomerTable";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import SubCustomerTable from "../../components/SubCustomerTable";

const SubCustomers = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <Layout title={"Sub Customers"}>
      <div className="mt-8 bg-white w-full  rounded-lg ">
        {id != undefined && <SubCustomerTable id={id} />}
      </div>
    </Layout>
  );
};

export default SubCustomers;
