import { Button } from "antd";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <h1>welcome to news home page</h1>
      <Button className="mt-16" type="primary">
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

export default index;
