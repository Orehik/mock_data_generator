import React, { lazy, ReactNode, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

const MainPage = lazy(() => import("./pages/MainPage"));
const SumSub = lazy(() => import("./pages/SumSub"));

type RouteT = {
  path: string;
  component: ReactNode;
};

const baseRoutes: RouteT[] = [
  { path: "/", component: <MainPage /> },
  { path: "/sumsub/:sumSubToken", component: <SumSub /> },
];

export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        {baseRoutes.map((route) => (
          <Route path={route.path} key={route.path} element={<Suspense fallback={<Loader/>}>{route.component}</Suspense>} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
