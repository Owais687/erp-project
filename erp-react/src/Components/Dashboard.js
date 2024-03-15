import React from 'react';

function Dashboard() {


  // Array of colors for the Metric cards
  const cardColors = ['#ffcc00', '#ff6600', '#0099cc', '#9933cc', '#009933'];

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2>Dashboard</h2>
        <div className="metric-cards">
          {/* Metric card for total number of products */}
          <div className="metric-card" style={{ backgroundColor: cardColors[0] }}>
            <h3>Total Number of Products</h3>
            <p>62</p>
          </div>
          {/* Metric card for total number of orders */}
          <div className="metric-card" style={{ backgroundColor: cardColors[1] }}>
            <h3>Total Number of Orders</h3>
            <p>5</p>
          </div>
          <div className="metric-card" style={{ backgroundColor: cardColors[2] }}>
            <h3>Highest Cost</h3>
            <p>130000</p>
          </div>
          <div className="metric-card" style={{ backgroundColor: cardColors[3] }}>
            <h3>Least Cost</h3>
            <p>1500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
