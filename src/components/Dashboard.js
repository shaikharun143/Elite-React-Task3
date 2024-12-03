import React from "react";
import ChartCard from "./ChartCard";
import "./Dashboard.css";

const Dashboard = () => {
  const platforms = [
    { name: "Facebook", metric: "Likes", value: 1200 },
    { name: "Twitter", metric: "Retweets", value: 800 },
    { name: "Instagram", metric: "Followers", value: 2000 },
    { name: "LinkedIn", metric: "Shares", value: 500 },
  ];

  return (
    <main className="dashboard">
      {platforms.map((platform, index) => (
        <ChartCard
          key={index}
          platform={platform.name}
          metric={platform.metric}
          value={platform.value}
          chartType={index % 2 === 0 ? "line" : "pie"} // Alternate between line and pie
        />
      ))}
    </main>
  );
};

export default Dashboard;
