/* eslint-disable react/prop-types */
import MainDashboard from "../components/MainDashboard";

function HomePage({ toggle, data }) {
  return (
    <div>
      <MainDashboard toggle={toggle} data={data} />
    </div>
  );
}

export default HomePage;
