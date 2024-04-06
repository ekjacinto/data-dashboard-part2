import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/* eslint-disable react/prop-types */
const DataGraph = ({ toggle, data }) => {
  console.log(data);
  let metacriticData = [];
  let ownedData = [];
  data.forEach((item) => {
    metacriticData = [
      ...metacriticData,
      { ["name"]: item.name, ["metacritic"]: item.metacritic },
    ];
    ownedData = [
      ...ownedData,
      { ["name"]: item.name, ["owned"]: item.added_by_status.owned },
    ];
  });
  const COLORS = ["#340259", "#4B0082"];

  return (
    <div
      className={`flex flex-col ${
        toggle ? "w-[50rem]" : "w-[52rem]"
      } bg-[#131313] rounded-2xl mt-8 items-center justify-center h-[52.5rem] pt-4`}
    >
      <ResponsiveContainer width="80%" height="70%">
        <BarChart width={500} height={300} data={metacriticData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="metacritic" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="80%" height="70%">
        <PieChart width={500} height={500}>
          <Pie
            data={ownedData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            dataKey="owned"
            nameKey="name"
            outerRadius={175}
            fill="#8884d8"
          >
            {ownedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#131313] font-bold text-xl p-2">
        <p>{`${data.name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default DataGraph;
