import { UnorderedListOutlined } from "@ant-design/icons";
import CountUp from "react-countup";

const Card = ({ icon, title, value, color }) => {
  return (
    <div
      className={`p-8 rounded-lg flex-1 box-shadow`}
      style={{ backgroundColor: color }}
    >
      <img src={icon} alt="" className="w-[2.8rem] mb-2" />
      <h4 className="text-white">{title}</h4>
      <p className="h1 text-white font-semibold">
        <CountUp end={value} />
      </p>
    </div>
  );
};

export default Card;
