import { Button } from "antd";
import { AddButtonIcon } from "../../assets/icon";

const AddDocButton = () => {
  return (
    <Button className="!bg-white  !text-[#3D82D0] !border-[#3D82D0]  text-[17px] h-[48px] max-w !rounded-[12px]">
      Создать документ
      <AddButtonIcon />
    </Button>
  );
};

export default AddDocButton;
