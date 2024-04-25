import React from "react";
import Home from "./components/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
