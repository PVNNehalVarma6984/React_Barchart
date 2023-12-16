import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const rawData  = [
  { dumperNumber: 'DMPR-237', loadStatus: 1, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-521', loadStatus: 2, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-579', loadStatus: 0, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-456', loadStatus: 1, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-468', loadStatus: 2, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-807', loadStatus: 0, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-246', loadStatus: 1, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-789', loadStatus: 2, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-234', loadStatus: 0, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-679', loadStatus: 1, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-824', loadStatus: 2, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-135', loadStatus: 0, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-123', loadStatus: 1, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-648', loadStatus: 2, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-392', loadStatus: 0, dates: '19-12-2023' },
  { dumperNumber: 'DMPR-973', loadStatus: 1, dates: '19-12-2023' },
  // Add more data as needed
];



// Process the data to get counts for 0s, 1s, and 2s
const processData = (data) => {
  const counts = { '0': 0, '1': 0, '2': 0 };
  data.forEach(({ loadStatus }) => {
    counts[loadStatus]++;
  });
  return Object.entries(counts).map(([status, count]) => ({ status, count }));
};

const processedData = processData(rawData);

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={processedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
