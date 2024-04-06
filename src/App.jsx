import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
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
    <main>
      <Sidebar toggle={toggle} handleToggle={handleToggle} />
      <Routes>
        <Route path="/" element={<HomePage toggle={toggle} data={data} />} />
        <Route
          path="/game/:name"
          element={<GamePage toggle={toggle} data={data} />}
        />
      </Routes>
    </main>
  );
}

export default App;
