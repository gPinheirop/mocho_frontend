import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from "./member/screens/LoginScreen/index.tsx";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  // {
  //   path: "home",
  //   element:
  // },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme accentColor="blue" radius="small">
      <RouterProvider router={router}></RouterProvider>
    </Theme>
  </React.StrictMode>
);
