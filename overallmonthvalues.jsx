import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const rawData = [
  { date: '20-12-2023', 'Empty': 10, 'Partial': 15, 'Full': 20 },
  { date: '21-12-2023', 'Empty': 8, 'Partial': 12, 'Full': 18 },
  { date: '22-12-2023', 'Empty': 12, 'Partial': 18, 'Full': 25 },
  { date: '23-12-2023', 'Empty': 15, 'Partial': 20, 'Full': 30 },
  { date: '24-12-2023', 'Empty': 18, 'Partial': 22, 'Full': 35 },
  { date: '25-12-2023', 'Empty': 14, 'Partial': 25, 'Full': 28 },
  { date: '26-12-2023', 'Empty': 20, 'Partial': 30, 'Full': 40 },
];

export default class Example extends PureComponent {
  render() {
    const pages = Object.keys(rawData[0]).filter(key => key !== 'date');

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={rawData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {pages.map((page, index) => (
            <Bar
              key={index}
              dataKey={page}
              fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Random color for each page
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
