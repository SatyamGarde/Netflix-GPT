import React from "react";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import MoviePopUp from "./MoviePopUp";
import Error from "../Utils/Error";
const Home = () => {
  return <h1>This is home</h1>;
};

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/popup/:id",
      element: <MoviePopUp />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  

  return <RouterProvider router={appRouter} />;
};

export default Body;
