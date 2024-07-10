import { HeaderIcon1, HeaderIcon2, HeaderIcon3 } from "../../../assets/icon";
import HeaderCard from "./component/view";

const Header = () => {
  return (
    <div className="flex items-center justify-between mt-[40px] gap-x-[20px] max-xl:flex max-xl:flex-col max-xl:gap-y-[10px]">
      <HeaderCard
        desc="Обсуждение завершено"
        title="24 870"
        icon={<HeaderIcon1 />}
      />
      <HeaderCard
        desc="Обсуждение продолжается"
        title="240"
        icon={<HeaderIcon2 />}
      />
      <HeaderCard desc="Все документы" title="25 000" icon={<HeaderIcon3 />} />
    </div>
  );
};
export default Header;
