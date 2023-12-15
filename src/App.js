import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "./components/UserLayout";
import "./App.css";
import Home from "./components/Home";
import Store from "./components/Store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        { index: true , element: <Home /> },
        { path: "/store", element: <Store /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
