import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ analytics }) {
  const domains = [...new Set(analytics.map(item => item._id.domain))];
  const productiveData = domains.map(domain => {
    const entry = analytics.find(item => item._id.domain === domain && item._id.category === 'productive');
    return entry ? entry.totalTime / 3600 : 0;
  });
  const unproductiveData = domains.map(domain => {
    const entry = analytics.find(item => item._id.domain === domain && item._id.category === 'unproductive');
    return entry ? entry.totalTime / 3600 : 0;
  });
  const neutralData = domains.map(domain => {
    const entry = analytics.find(item => item._id.domain === domain && item._id.category === 'neutral');
    return entry ? entry.totalTime / 3600 : 0;
  });

  const data = {
    labels: domains,
    datasets: [
      {
        label: 'Productive',
        data: productiveData,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Unproductive',
        data: unproductiveData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Neutral',
        data: neutralData,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Time Distribution by Domain',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Hours'
        }
      }
    }
  };

  return <Bar options={options} data={data} />;
}

export default Chart;