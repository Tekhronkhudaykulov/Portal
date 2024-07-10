import { useTranslation } from "react-i18next";
import HeaderCard from "./component/view";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between mt-[40px] gap-x-[20px]">
      <HeaderCard desc="Обсуждение завершено" />
      <HeaderCard desc="Обсуждение продолжается" />
      <HeaderCard desc="Все документы" />
    </div>
  );
};
export default Header;
