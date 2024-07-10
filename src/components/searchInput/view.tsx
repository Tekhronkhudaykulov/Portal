import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className="flex relative w-[550px] bg-white">
      <input
        type="text"
        className="w-full  py-[11px] max-xl:py-[15px]  rounded-[12px] px-[17px] max-xl:px-[5px] max-xl:text-[15px]"
        placeholder="Введите ключевое слово из названия проекта"
      />
      <CiSearch
        className="absolute right-[10px] bottom-[8px] max-xl:right-[4px] max-xl:bottom-[10px]"
        fontSize={30}
      />
    </div>
  );
};

export default SearchInput;
