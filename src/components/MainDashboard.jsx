/* eslint-disable react/prop-types */
import DataGraph from "./DataGraph";
import Stats from "./Stats";
import SummaryStat from "./SummaryStat";

const MainDashboard = ({ toggle, data }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${
        toggle
          ? "ml-[32rem] w-[70%] duration-[400ms]"
          : "w-[96%] duration-[750ms]"
      }
      transition-all`}
    >
      <SummaryStat toggle={toggle} data={data} />
      <div
        className={`flex justify-center items-center ${
          toggle ? "ml-0" : "ml-56"
        } gap-4`}
      >
        <Stats data={data} />
        <DataGraph data={data} toggle={toggle} />
      </div>
    </div>
  );
};

export default MainDashboard;
