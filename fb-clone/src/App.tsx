import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Header />

      <div className="App_body">
        <Sidebar />
        {/* <Feed /> */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
