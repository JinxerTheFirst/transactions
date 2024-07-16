import React, { useState, useEffect } from "react";
import CustomerTable from "./component/CustomerTable/CustomerTable";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutMe from "./component/AboutMe/AboutMe";
import Home from "./component/Home/Home";
import LayOut from "./component/LayOut/LayOut";
import NotFound from "./component/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "transactions",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "customertrans",
        element: <CustomerTable />,
      },
      {
        path: "aboutme",
        element: <AboutMe />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
