import { lazy } from "react";

const Inn = lazy(() => import("./dashboard/Inn/view"));
const Popular = lazy(() => import("./dashboard/Popular/view"));

export { Inn, Popular };
