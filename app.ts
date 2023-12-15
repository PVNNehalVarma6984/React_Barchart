import * as fs from 'fs';
import { createCsvParser } from 'csv-parse';
import * as plt from 'plotly.js';

// Define function to process data and plot chart
async function processDataAndPlotChart() {
  // Read CSV file content
  const fileContent = fs.readFileSync('DumperLoadStatus_Data.csv', 'utf8');

  // Create a synchronous parser
  const syncParser = createCsvParser({ columns: true });

  // Parse CSV data
  const records = syncParser(fileContent);

  // Count occurrences of each value in "Dumper Load Status" column
  const statusCounts = records.reduce((counts, record) => {
    const status = record['Dumper Load Status'];
    counts[status] = (counts[status] || 0) + 1;
    return counts;
  }, {});
  // Prepare data for bar chart
  const xData = Object.keys(statusCounts);
  const yData = Object.values(statusCounts);

  // Define chart trace
  const trace = {
    x: xData,
    y: yData,
    type: 'bar',
    marker: {
      color: ['red', 'green', 'blue'], // Define bar colors
    },
  };

  // Define chart layout
  const layout = {
    title: 'Dumper Load Status Counts',
    xaxis: { title: 'Dumper Load Status' },
    yaxis: { title: 'Count' },
  };

  // Plot the chart
  plt.newPlot();
  plt.plotly([trace], layout);
}

// Call the function to process data and plot chart
processDataAndPlotChart()
  .then(() => console.log('Chart plotted successfully!'))
  .catch(error => console.error('Error plotting chart:', error));