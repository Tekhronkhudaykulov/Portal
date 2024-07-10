import { useTranslation } from "react-i18next";
import { BurgerMenu, Profile } from "../../assets/icon";
import { ASSETS } from "../../assets/img";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto pt-[30px] pb-[20px] flex items-center justify-between">
      <div>
        <div className="w-[50px] h-[50px] bg-[#F0F220] flex items-center justify-center rounded-[12px]">
          <BurgerMenu />
        </div>
      </div>
      <div className="flex items-center gap-x-[20px]">
        <img src={ASSETS.SideBarLogo} alt="" />
        <p className="w-[650px] text-[20px] font-[700] text-[#ffffff] leading-[25px]">
          Единый открытый дискуссионный портал Государственных образовательных
          стандартов и государственных образовательных требований
        </p>
      </div>
      <div className="flex items-center gap-x-[20px]">
        <div className="bg-white h-[35px] flex items-center justify-center px-[10px] rounded-[12px]">
          {/* <LanguageSwitcher /> */}
          <select name="" id="" className="outline-none">
            <option value="">RU</option>
            <option value="">UZ</option>
          </select>
        </div>
        <div className="w-[50px] h-[50px] border flex items-center justify-center rounded-[12px] border-[#F0F220]">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
