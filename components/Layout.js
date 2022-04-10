import ACHead from "./ACHead";
import Card from "./Card";
import Sidebar from "./Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Drawer from "./Drawer";

const Layout = ({ title, children }) => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ left: open });
  };

  return (
    <main className="flex min-h-screen">
      <ACHead />
      <Sidebar />
      <div className="bg-[#f9fafc] flex-1 w-[calc(100vw - 18.75rem)] lg:ml-[18.75rem]">
        <div className="flex flex-col  mx-auto">
          <div className="p-8 flex items-center gap-4">
            <div className="block lg:hidden">
              <MenuIcon onClick={toggleDrawer("left", true)} />
            </div>
            <h1 className="h1 font-semibold">{title}</h1>
          </div>
          <div className="px-8">{children}</div>
        </div>
      </div>
      <Drawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
    </main>
  );
};

export default Layout;
