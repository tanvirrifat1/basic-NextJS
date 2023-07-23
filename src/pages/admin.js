import React from "react";
import RootLayout from "../components/Layout/RootLayout";
import DashboardLayout from "../components/Layout/DashboardLayout";

const admin = () => {
  return (
    <div>
      <h1>This is admin page</h1>
    </div>
  );
};

export default admin;

admin.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>;
    </RootLayout>
  );
};
