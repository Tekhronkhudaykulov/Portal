interface SliderCardType {
  title: string;
  img: string;
}

const SliderCard = ({ title, img }: SliderCardType) => {
  return (
    <div className="flex items-center flex-col w-full bg-white h-[192px] max-xl:h-[120px] justify-center rounded-[12px]">
      <img
        src={img}
        alt=""
        className="max-xl:w-[70px] max-xl:h-[56px] max-xl:object-contain"
      />
      <p className="w-[260px] text-center mt-[14px] leading-[20px] max-xl:text-[10px] max-xl:w-[130px] max-xl:leading-[11px]">
        {title}
      </p>
    </div>
  );
};
export default SliderCard;
