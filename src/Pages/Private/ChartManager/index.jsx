import React from "react";
import ChartPost from "./Components/ChartPost";
import ChartQuestion from "./Components/ChartQuestion";
import ChartSolutions from "./Components/ChartSolutions";
import ChartUser from "./Components/ChartUser";
import ResultSulotion from "./Components/ResultSulotion";

const ChartManager = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 2xl:gap-10">
      <ChartPost />
      <ChartQuestion />
      <ChartSolutions />
      <ChartUser />
      <ResultSulotion />
    </div>
  );
};

export default ChartManager;
