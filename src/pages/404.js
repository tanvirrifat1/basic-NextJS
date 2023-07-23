import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 4000);
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWQOoO1Deu1YVI_n25COoUhCp6kRvG0G6OAo0WY3dzQ&s"
        alt=""
        width="50%"
        height="50%"
      />
    </div>
  );
};

export default ErrorPage;
