import HeaderCard from "./component/view";

const Header = () => {
  return (
    <div className="flex items-center justify-between mt-[40px] gap-x-[20px]">
      <HeaderCard />
      <HeaderCard />
      <HeaderCard />
    </div>
  );
};
export default Header;
