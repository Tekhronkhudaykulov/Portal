import { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { _routes } from "./_routes";
import { DashboardLayout } from "../layouts";
import { Inn, Popular } from "../pages";

const Router = () => {
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="inn" element={<Inn />} />
            <Route path="popular" element={<Popular />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default Router;
