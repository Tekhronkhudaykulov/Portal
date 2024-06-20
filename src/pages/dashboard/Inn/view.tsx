import AddDocButton from "../../../components/button/addDocButton";
import ModalCRUD from "../../../components/modal/view";
import TableForDashboard from "../../../components/table/view";
import { modalsStore } from "../../../store";

const Inn = () => {
  const { openModal } = modalsStore();
  return (
    <div>
      <ModalCRUD />
      <div className="mt-[30px] flex items-end justify-end">
        <AddDocButton onClick={() => openModal("CRUID")} />
      </div>
      <div className="mt-[18px]">
        <TableForDashboard />
      </div>
    </div>
  );
};
export default Inn;
