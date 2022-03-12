import ACHead from "./ACHead";
import Card from "./Card";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="flex min-h-screen">
      <ACHead />
      <Sidebar />
      <div className="bg-[#f9fafc] flex-1">
        <div className="flex flex-col max-w-[80rem] mx-auto">
          <h1 className="h1 font-semibold p-8">Dashboard</h1>
          <div className="px-8">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
