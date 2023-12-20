import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "./components/UserLayout";
import "./App.css";
import Home from "./components/Home";
import Store from "./components/Store";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Admin from "./components/Admin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/store", element: <Store /> },
        { path: "/admin", element: <Admin /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
