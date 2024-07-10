import { useState } from "react";
import { BurgerMenu, Profile } from "../../assets/icon";
import { ASSETS } from "../../assets/img";
import { modalsStore } from "../../store";

const Navbar = () => {
  const { openModal } = modalsStore();
  const [text, setText] = useState("RU");

  const toggleText = () => {
    setText((prevText) => (prevText === "RU" ? "UZ" : "RU"));
  };
  return (
    <div className="container mx-auto pt-[30px] pb-[20px] flex items-center justify-between  max-xl:pl-[10px] max-xl:pr-[10px]">
      <div>
        <div
          onClick={() => openModal("CRUID")}
          className="w-[50px]  cursor-pointer h-[50px] bg-[#F0F220] flex items-center justify-center rounded-[12px]"
        >
          <BurgerMenu />
        </div>
      </div>
      <div className="flex items-center gap-x-[20px] max-xl:hidden">
        <img src={ASSETS.SideBarLogo} alt="" />
        <p className="w-[650px] text-[20px] font-[700] text-[#ffffff] leading-[25px]">
          Единый открытый дискуссионный портал Государственных образовательных
          стандартов и государственных образовательных требований
        </p>
      </div>
      <div className="flex items-center gap-x-[20px]">
        <div className="bg-white h-[35px] flex items-center justify-center px-[10px] rounded-[12px]">
          {/* <LanguageSwitcher /> */}
          <p className="cursor-pointer" onClick={toggleText}>
            {text}
          </p>
        </div>
        <div className="w-[50px] h-[50px] border flex items-center justify-center rounded-[12px] border-[#F0F220]">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
