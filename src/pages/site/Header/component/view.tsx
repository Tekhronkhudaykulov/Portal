interface HeaderCardType {
  icon?: any;
  title?: string;
  desc?: string;
}
const HeaderCard = ({ desc, icon, title }: HeaderCardType) => {
  return (
    <div className="flex gap-x-[20px] py-[13px] w-full  px-[15px] bg-white rounded-[12px]">
      <div className="h-[50px] w-[50px] flex items-center justify-center bg-yellowSecond rounded-[6px]">
        {icon}
      </div>
      <div>
        <p className="text-pitchBlack font-[700] text-[25px] mb-[14px]">
          {title}
        </p>
        <p className="text-graySecond text-[17px] font-[400]">{desc}</p>
      </div>
    </div>
  );
};
export default HeaderCard;
