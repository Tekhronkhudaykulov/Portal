import SideBarNavbar from "../../../components/sideBarNavbar/view";
import TableForDashboard from "../../../components/table/view";

const Popular = () => {
  return (
    <div>
      <SideBarNavbar title="Популярные проекты" />
      <div className="mt-[18px]">
        <TableForDashboard />
      </div>
    </div>
  );
};
export default Popular;
