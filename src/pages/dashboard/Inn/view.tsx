import AddDocButton from "../../../components/button/addDocButton";
import TableForDashboard from "../../../components/table/view";
import { data } from "../../../data/view";

const Inn = () => {
  return (
    <div>
      <div className="mt-[30px] flex items-end justify-end">
        <AddDocButton />
      </div>
      <div className="mt-[18px]">
        <TableForDashboard />
      </div>
    </div>
  );
};
export default Inn;
