    
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";

const data = [
  {
    name: "KHánh",
   diemso:100
  },
  {
    name: "Bảo",
   diemso:50
  },
  {
    name: "Đỉnh",
  diemso:200,
  },

];

export default function ComposeChart() {
  return (
    <ComposedChart
      layout="vertical"
      width={600}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" />
      <Tooltip />
      <Legend />
   
      <Bar dataKey="diemso" barSize={20} fill="#413ea0" />
      
    </ComposedChart>
  );
}
