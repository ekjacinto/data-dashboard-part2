import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainDashboard from "./components/MainDashboard";

function App() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}`
        );
        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [API_KEY]);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div>
      <Sidebar toggle={toggle} handleToggle={handleToggle} />
      <MainDashboard toggle={toggle} data={data} />
    </div>
  );
}

export default App;
