import React from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";

const dashBoard = () => {
  return (
    <div>
      <h1>This is Dashboard</h1>
    </div>
  );
};

export default dashBoard;

dashBoard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
