import { Outlet, useNavigate } from "react-router-dom";
import { ASSETS } from "../../assets/img";
import "../index.scss";

const DashboardLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="dashBoardLayout h-[100vh]">
      <div className="bg-[#397FD5]  pt-[20px] px-[40px]">
        <div>
          <img className="object-cover" src={ASSETS.SideBarLogo} alt="" />
        </div>
        <div className="flex flex-col mt-[50px] gap-y-[30px]">
          <a onClick={() => navigate("inn")} className="text-white">
            Предложенные мной проекты NHH
          </a>
          <a className="text-white" href="">
            Избранные проекты
          </a>
          <a className="text-white" href="">
            Предложения, которые мне понравились
          </a>
          <a className="text-white" href="">
            Техническая поддержка
          </a>
          <a onClick={() => navigate("popular")} className="text-white">
            Популярные проекты
          </a>
          <a className="text-white" href="">
            Моя специальность
          </a>
          <a className="text-white" href="">
            Мои ответы на анкеты
          </a>
          <a className="text-white" href="">
            Подписка
          </a>
        </div>
      </div>
      <div className="w-[98%] mx-[auto]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
