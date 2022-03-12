import Link from "next/link";
import {
  DashboardOutlined,
  UsergroupAddOutlined,
  UnorderedListOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <aside className="min-h-screen w-[18.75rem] bg-[#e0e0e0] p-8 flex flex-col box-shadow">
      <div className="flex justify-center items-center h-[10rem] ">
        <img src="/logo.svg" alt="" className="max-w-[10rem]" />
      </div>
      <ul className="flex flex-col flex-1 gap-8 mt-12">
        <li>
          <Link href="">
            <a>
              <div className="flex items-center gap-4 ">
                <DashboardOutlined className="h4" />
                <p className="h4 font-medium">Dashboard</p>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>
              <div className="flex items-center gap-4 ">
                <UsergroupAddOutlined className="h4" />
                <p className="h4 font-medium">Customers</p>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>
              <div className="flex items-center gap-4 ">
                <UnorderedListOutlined className="h4" />
                <p className="h4 font-medium">Orders</p>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>
              <div className="flex items-center gap-4 ">
                <UnorderedListOutlined className="h4" />
                <p className="h4 font-medium">Order History</p>
              </div>
            </a>
          </Link>
        </li>
      </ul>

      <ul>
        <li className="">
          <Link href="">
            <a>
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-4 mt-8">
                  <LogoutOutlined className="h4" />
                  <p className="h4 font-medium">Logout</p>
                </div>
                <SettingOutlined className="h4" />
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
