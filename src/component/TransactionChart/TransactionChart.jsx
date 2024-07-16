import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const TransactionChart = ({ transactions }) => {
  const data = transactions.reduce((acc, transaction) => {
    const date = transaction.date;
    if (!acc[date]) {
      acc[date] = { date, amount: 0 };
    }
    acc[date].amount += transaction.amount;
    return acc;
  }, {});

  const chartData = Object.values(data);

  return (
    <div className="">
      <div className="mt-8 mx-auto">
        <h2 className="text-xl font-semibold mb-4">Transaction Chart</h2>
        <BarChart width={300} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default TransactionChart;
