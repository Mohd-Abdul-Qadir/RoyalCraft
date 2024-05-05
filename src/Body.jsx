import React from "react";
import Home from "./components/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/Contact/ContactUs";
import SingleProduct from "./components/singleproduct/SingleProduct";
import GoToTop from "./components/GotoBtn/GoToTop";

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
    {
      path: "/product",
      element: <SingleProduct />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
      <GoToTop />,
    </div>
  );
};

export default Body;
