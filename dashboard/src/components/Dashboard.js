import React, { useState, useEffect } from 'react';
import Chart from './Chart';

function Dashboard() {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/analytics/weekly')
      .then(res => res.json())
      .then(data => setAnalytics(data))
      .catch(error => console.error('Error fetching analytics:', error));
  }, []);

  const productiveTime = analytics
    .filter(item => item._id.category === 'productive')
    .reduce((sum, item) => sum + item.totalTime, 0);

  const unproductiveTime = analytics
    .filter(item => item._id.category === 'unproductive')
    .reduce((sum, item) => sum + item.totalTime, 0);

  const neutralTime = analytics
    .filter(item => item._id.category === 'neutral')
    .reduce((sum, item) => sum + item.totalTime, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Weekly Productivity Report</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-green-100 p-4 rounded">
          <h2 className="text-xl">Productive Time</h2>
          <p>{(productiveTime / 3600).toFixed(2)} hours</p>
        </div>
        <div className="bg-red-100 p-4 rounded">
          <h2 className="text-xl">Unproductive Time</h2>
          <p>{(unproductiveTime / 3600).toFixed(2)} hours</p>
        </div>
        <div className="bg-blue-100 p-4 rounded">
          <h2 className="text-xl">Neutral Time</h2>
          <p>{(neutralTime / 3600).toFixed(2)} hours</p>
        </div>
      </div>
      <Chart analytics={analytics} />
    </div>
  );
}

export default Dashboard;