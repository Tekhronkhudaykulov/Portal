import { ASSETS } from "../../assets/img";

const Footer = () => {
  return (
    <div className="container mx-auto pt-[48px]">
      <div className="flex items-center justify-center gap-x-[25px]">
        <img src={ASSETS.SideBarLogo} alt="" />
        <p className="w-[650px] text-[20px] font-[700] text-[#ffffff] leading-[25px]">
          Единый открытый дискуссионный портал Государственных образовательных
          стандартов и государственных образовательных требований
        </p>
      </div>
      <section className="text-white flex justify-between mt-[47px] pb-[30px]">
        <a href="">Кабинет пользователя</a>
        <a href="">Государственным органам</a>
        <a href="">Часто задаваемые вопросы</a>
        <a href="">Техническая поддержка</a>
      </section>
    </div>
  );
};
export default Footer;
