import { createBrowserRouter } from "react-router";
import Home from "@/app/pages/Home";
import Templates from "@/app/pages/Templates";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/templates",
    Component: Templates,
  },
]);
