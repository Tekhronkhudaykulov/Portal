interface SliderCardType {
  title: string;
  img: string;
}

const SliderCard = ({ title, img }: SliderCardType) => {
  return (
    <div className="flex items-center flex-col w-full bg-white h-[192px] justify-center rounded-[12px]">
      <img src={img} alt="" />
      <p className="w-[260px] text-center mt-[14px] leading-[20px]">{title}</p>
    </div>
  );
};
export default SliderCard;
