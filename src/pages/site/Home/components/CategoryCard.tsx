import { ReactNode } from "react";

interface CategoryCardType {
  icon: ReactNode;
  title: string;
}

const CategoryCard = ({ icon, title }: CategoryCardType) => {
  return (
    <div className="bg-[#FFFFFF] rounded-[12px]">
      <div className="px-[20px] py-[25px]">
        <div className="w-[55px] h-[55px] mb-[18px] flex items-center justify-center bg-[#397FD5] rounded-[6px]">
          {icon}
        </div>
        <p className="text-[#000000] text-[18px] font-[600]">{title}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
