import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className="flex relative w-[550px] ">
      <input
        type="text"
        className="w-full py-[11px] rounded-[12px] px-[17px]"
        placeholder="Введите ключевое слово из названия проекта"
      />
      <CiSearch className="absolute right-[10px] bottom-[8px]" fontSize={30} />
    </div>
  );
};

export default SearchInput;
