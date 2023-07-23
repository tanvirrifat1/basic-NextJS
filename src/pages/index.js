import React from "react";
import RootLayout from "../components/Layout/RootLayout";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Home page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
