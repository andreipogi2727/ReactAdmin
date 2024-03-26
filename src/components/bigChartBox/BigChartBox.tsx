import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./bigChartBox.scss"

const data = [
    {
      name: "Sun",
      books: 4000,
      clothes: 3908,
      electronic: 2000,
    },
    {
        name: "Mon",
        books: 4100,
        clothes: 3228,
        electronic: 2500,
    },
    {
        name: "Tue",
        books: 6000,
        clothes: 2908,
        electronic: 4000,
    },
    {
        name: "Wed",
        books: 4200,
        clothes: 3448,
        electronic: 2230,
    },
    {
        name: "Thu",
        books: 1200,
        clothes: 3908,
        electronic: 5000,
    },
    {
        name: "Fri",
        books: 1000,
        clothes: 4908,
        electronic: 3000,
    },
    {
        name: "Sat",
        books: 3220,
        clothes: 2908,
        electronic: 2230,
    },
  ];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
        <h1>Revenue Analytics</h1>
        <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
\          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="electronic" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="books" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
        
    </div>
  )
}

export default BigChartBox