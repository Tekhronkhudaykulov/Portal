import { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { _routes } from "./_routes";
import { DashboardLayout } from "../layouts";
import { Inn } from "../pages";

const Router = () => {
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="inn" element={<Inn />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default Router;