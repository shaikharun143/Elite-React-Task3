import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-layout">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
