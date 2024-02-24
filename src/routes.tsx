import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

// Home page
const Index = lazy(() => import("@/pages/index"));
const Notfound = lazy(() => import("@/pages/404"));
const ProjectDetail = lazy(() => import("@/pages/project-detail"));

export const routes: Array<RouteObject> = [
  {
    index: true,
    element: (
      <Suspense>
        <Index />
      </Suspense>
    ),
  },
  {
    path: "/project/:id",
    element: (
      <Suspense>
        <ProjectDetail />
      </Suspense>
    ),
  },

  {
    path: "*",
    element: (
      <Suspense>
        <Notfound />
      </Suspense>
    ),
  },
];

export default routes;
