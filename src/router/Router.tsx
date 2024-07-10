import { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { _routes } from "./_routes";
import Home from "../pages/site/Home/view";

const Router = () => {
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          {/* <Route path="/" element={<DashboardLayout />}>
            <Route path="inn" element={<Inn />} />
            <Route path="popular" element={<Popular />} />
          </Route> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default Router;
