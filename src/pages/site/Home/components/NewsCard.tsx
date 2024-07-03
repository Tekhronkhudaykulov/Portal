import { Date } from "../../../../assets/icon";

const ProjectCard = () => {
  return (
    <div className="bg-white rounded-[12px]">
      <div className="py-[25px] px-[20px]">
        <p className="font-[600] text-[18px] text-[#000000]">
          Jizzax shahar mahalliy budjetining 2024-yilda shakllangan qo‘shimcha
          manbalarini xarajatlarga yo‘naltirish to‘g‘risida
        </p>
        <div className="flex items-center justify-between mt-[30px]">
          <div className="flex items-center gap-x-[10px]">
            <Date />
            <p className="text-[#8C8C8C] text-[17px] font-[400]"> 06.05.2024</p>
          </div>
          <p className="text-[#8C8C8C] text-[17px] font-[400]">
            Kengash karori
          </p>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
