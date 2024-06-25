import { Navbar } from "../../../layouts";
import Header from "../Header/view";

const Home = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="bg-[#397FD5]">
        <Navbar />
      </div>
      <div className="container mx-auto">
        <Header />
      </div>
    </div>
  );
};

export default Home;
