import React from "react";
import { Button, Space } from "antd";
import Link from "next/link";
const App = () => (
  <Button type="primary" ghost>
    <Link href="/news">news</Link>
  </Button>
);
export default App;
