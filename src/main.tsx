import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from "./member/screens/LoginScreen/index.tsx";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import App from "./App.tsx";
import ProjectScreen from "./project/ProjectScreen/index.tsx";
import ProjectPage from "./project/ProjectPage/index.tsx";
import MemberScreen from "./member/screens/MemberScreen/index.tsx";
import MemberPage from "./member/screens/MemberPage/index.tsx";

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
        path: "projects",
        element: <ProjectScreen />,
      },
      {
        path: "/projects/:id",
        element: <ProjectPage />,
      },
      {
        path: "members",
        element: <MemberScreen />,
      },
      {
        path: "members/:id",
        element: <MemberPage />,
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
