import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "./ChartCard.css";

// Registering necessary chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartCard = ({ platform, metric, value, chartType = "line" }) => {
  // Example datasets
  const lineData = {
    labels: ["January", "February", "March", "April" , "May" , "June"],
    datasets: [
      {
        label: `${metric} Growth`,
        data: [250, 400, 450, 400 ,600 , value],
        borderColor: "#ffffff",
        backgroundColor: "black",
        tension: 0.3,
        
      },
    ],
  };

  const pieData = {
    labels: ["Organic", "Paid", "Referral", "Direct"],
    datasets: [
      {
        label: `${metric} Distribution`,
        data: [40, 20, 20, 20], // Example percentage distribution
        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: `${platform} ${chartType === "line" ? "Trend" : "Distribution"}` },
    },
  };

  return (
    <div className="chart-card">
      <h2 className="platform-name">{platform}</h2>
      {chartType === "line" ? (
        <Line data={lineData} options={options} />
      ) : (
        <Pie data={pieData} options={options} />
      )}
    </div>
  );
};

export default ChartCard;
