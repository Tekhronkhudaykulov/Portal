import { HeaderIcon1 } from "../../../../assets/icon";

interface HeaderCardType {
  icon?: any;
  title?: string;
  desc?: string;
}
const HeaderCard = () => {
  return (
    <div className="flex gap-x-[20px] py-[13px] w-full  px-[15px] bg-white rounded-[12px]">
      <div className="h-[50px] w-[50px] flex items-center justify-center bg-yellowSecond rounded-[6px]">
        <HeaderIcon1 />
      </div>
      <div>
        <p className="text-pitchBlack font-[700] text-[25px] mb-[14px]">
          24 870
        </p>
        <p className="text-graySecond text-[17px] font-[400]">
          Обсуждение завершено
        </p>
      </div>
    </div>
  );
};
export default HeaderCard;
