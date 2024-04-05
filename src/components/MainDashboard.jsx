/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const MainDashboard = ({ toggle, data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const metacriticRange = [0, 100];
  const [metacritic, setMetacritic] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterDataByMetacritic = () => {
    const filtered = data.filter((game) => game.metacritic === metacritic);
    setFilteredData(filtered);
  };

  const filterDataBySearch = () => {
    if (!searchTerm) {
      setFilteredData(data);
    } else {
      const filtered = data.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <div
        className={`flex flex-col justify-center container ml-auto mr-12 p-6 mt-[275px] bg-[#131313] h-[95%] ${
          toggle ? "w-[71%]" : "w-[85%]"
        } h-[600px] rounded-2xl transition-all duration-500`}
      >
        <div className="mb-4 flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Search Game..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-400 p-2 rounded-md"
          />
          <button
            onClick={filterDataBySearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Search Game
          </button>
        </div>

        <div className="mb-4 flex justify-center items-center gap-4">
          <div className="flex gap-2 justify-center items-center">
            <input
              type="range"
              min={metacriticRange[0]}
              max={metacriticRange[1]}
              name="year"
              value={metacritic}
              onChange={(e) => setMetacritic(parseInt(e.target.value))}
            />
            <h2>{metacritic}</h2>
            <button
              onClick={filterDataByMetacritic}
              className="mr-2 bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Search By Year
            </button>
          </div>
        </div>

        <div className="flex justify-evenly items-center">
          <DataComponent
            filteredData={filteredData}
            category="Game"
            attribute="name"
          />
          <DataComponent
            filteredData={filteredData}
            category="Rating"
            attribute="rating"
          />
          <DataComponent
            filteredData={filteredData}
            category="Release Date"
            attribute="released"
          />
          <DataComponent
            filteredData={filteredData}
            category="Owned"
            attribute="added_by_status.owned"
          />
          <DataComponent
            filteredData={filteredData}
            category="Metacritic"
            attribute="metacritic"
          />
        </div>
      </div>
    </div>
  );
};

const DataComponent = ({ filteredData, category, attribute }) => {
  return (
    <div>
      <h2
        className={`text-xl font-bold mb-2 ${
          attribute === "name" ? "text-start" : null
        }`}
      >
        {category}
      </h2>
      <ul>
        {filteredData &&
          filteredData.map((item) => (
            <li
              key={item.id}
              className={`mb-2 ${attribute === "name" ? "text-start" : null}`}
            >
              {attribute === "rating"
                ? `${item[attribute]} / 5`
                : attribute === "metacritic"
                ? `${item[attribute]} / 100`
                : attribute.includes("added_by_status")
                ? item.added_by_status[attribute.split(".")[1]]
                : item[attribute]}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MainDashboard;
