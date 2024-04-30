import React from "react";
import Home from "./components/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/Contact/ContactUs";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
