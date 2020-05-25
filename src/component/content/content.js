import React from "react";
import Navbar from "./navbar/navbar";
import Chart from "./chart/chart";
import Result from "./result/result";

function Content(props) {
  return (
    <div>
      <Navbar />
      <Chart />
      <Result />
    </div>
  );
}

export default Content;
