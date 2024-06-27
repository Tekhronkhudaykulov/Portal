import { useTranslation } from "react-i18next";
import HeaderCard from "./component/view";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between mt-[40px] gap-x-[20px]">
      <HeaderCard desc={t("done")} />
      <HeaderCard desc={t("continue")} />
      <HeaderCard desc={t("allDocument")} />
    </div>
  );
};
export default Header;
