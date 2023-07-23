import React from "react";
import RootLayout from "../components/Layout/RootLayout";

const about = () => {
  return (
    <div>
      <h1>this is aboutPage</h1>
    </div>
  );
};

export default about;

about.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
