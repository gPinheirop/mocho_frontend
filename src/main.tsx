import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from "./member/screens/LoginScreen/index.tsx";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import HomePage from "./member/screens/HomePage/index.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginScreen />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme accentColor="blue" radius="small">
      <RouterProvider router={router}></RouterProvider>
    </Theme>
  </React.StrictMode>
);
