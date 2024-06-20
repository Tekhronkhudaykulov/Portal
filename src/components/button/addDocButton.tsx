import { Button } from "antd";
import { AddButtonIcon } from "../../assets/icon";

interface Props {
  onClick?: () => void;
}

const AddDocButton = ({ onClick }: Props) => {
  return (
    <Button
      onClick={onClick}
      className="!bg-white  !text-[#3D82D0] !border-[#3D82D0]  text-[17px] h-[48px] max-w !rounded-[12px]"
    >
      Создать документ
      <AddButtonIcon />
    </Button>
  );
};

export default AddDocButton;
