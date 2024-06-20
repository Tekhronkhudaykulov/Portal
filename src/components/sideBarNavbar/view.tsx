import { SideBarNavbarProfile } from "../../assets/icon";

const SideBarNavbar = ({ title }: any) => {
  return (
    <div className="bg-white mt-[15px] rounded-[12px]">
      <div className="flex items-center justify-between  p-[20px]">
        <p className="text-[24px] text-[#000000] font-[700]">{title}</p>
        <SideBarNavbarProfile />
      </div>
    </div>
  );
};
export default SideBarNavbar;
