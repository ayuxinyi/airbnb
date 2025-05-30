import { lazy } from "react";

const Home = lazy(() => import("@/views/home"));
const Entire = lazy(() => import("@/views/entire"));
const Detail = lazy(() => import("@/views/detail"));
const Demo = lazy(() => import("@/views/demo"));

const routes = [
  {
    index: true,
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
];

export default routes;
