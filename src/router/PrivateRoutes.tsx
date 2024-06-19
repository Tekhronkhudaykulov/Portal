import { FC, ReactNode } from "react";
import { Footer, Navbar } from "../layouts";
import { useLocation } from "react-router-dom";

interface Props {
  child?: ReactNode;
}

const PrivateRoutes: FC<Props> = ({ child }) => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {child}
      {location.pathname === "auth" ? "" : <Footer />}
    </>
  );
};

export default PrivateRoutes;
