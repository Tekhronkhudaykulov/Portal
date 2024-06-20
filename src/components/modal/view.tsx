import { Button, DatePicker, Modal, Select } from "antd";
import { Input } from "antd";
import { modalsStore } from "../../store";
import ImgUpload from "../upload/view";
import { useState } from "react";
import type { ConfigProviderProps, SelectProps } from "antd";

interface Props {
  onOk?: () => void;
}

type SizeType = ConfigProviderProps["componentSize"];

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = (value: string | string[]) => {
  console.log(`Selected: ${value}`);
};

const ModalCRUD = ({ onOk }: Props) => {
  const [size, setSize] = useState<SizeType>("middle");
  const { modals, closeModal } = modalsStore();
  // const handleSizeChange = (e: RadioChangeEvent) => {
  //   setSize(e.target.value);
  // };

  console.log(setSize);

  return (
    <>
      <Modal
        open={modals?.CRUID}
        onOk={onOk}
        className="text-[25px] font-[700]"
        onCancel={() => closeModal("CRUID")}
        footer={false}
      >
        <div>
          <p className="text-[25px] font-[700] text-center">Создание проекта</p>
        </div>
        <div className="mt-[35px]">
          <div>
            <p className="text-[#8C8C8C] font-[400]">Название</p>
            <Input className="h-[50px] mt-[10px]" />
          </div>
          <div className="my-[10px]">
            <p className="text-[#8C8C8C] font-[400]">Тип</p>
            <Select
              className="w-full  mt-[10px] h-[50px]"
              placeholder="Выберите тип документа"
            >
              <Select.Option value="sample">Sample</Select.Option>
            </Select>
          </div>
          <div>
            <p className="text-[#8C8C8C] font-[400] mb-[10px]">
              Сопроводительные документы
            </p>
            <ImgUpload />
          </div>
          <div className="my-[10px]">
            <p className="text-[#8C8C8C] font-[400]">Исполнитель</p>
            <Select
              className="w-full  mt-[10px] h-[50px]"
              placeholder="Выбрать"
            >
              <Select.Option value="sample">Sample</Select.Option>
            </Select>
          </div>
          <div>
            <p className="text-[#8C8C8C] font-[400] mb-[10px]">Проверяющий</p>
            <Select
              mode="multiple"
              size={size}
              placeholder="Выбрать"
              defaultValue={["a10", "c12"]}
              onChange={handleChange}
              style={{
                width: "100%",
                height: "50px",
              }}
              options={options}
            />
          </div>
          <div className="my-[10px]">
            <p className="text-[#8C8C8C] font-[400]">Утверждающий</p>
            <Select
              className="w-full  mt-[10px] h-[50px]"
              placeholder="Выбрать"
            >
              <Select.Option value="sample">Sample</Select.Option>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-x-[10px]">
            <div>
              <p className="text-[#8C8C8C] font-[400] mb-[10px]">Дата начала</p>
              <DatePicker className="w-full h-[50px]" />
            </div>
            <div>
              <p className="text-[#8C8C8C] font-[400] mb-[10px]">Дата конца</p>
              <DatePicker className="w-full h-[50px]" />
            </div>
          </div>
          <div className="mt-[50px] flex items-center justify-center">
            <Button className="!bg-white  !text-[#3D82D0] !border-[#3D82D0]  text-[17px] h-[48px] max-w !rounded-[12px]">
              Предоставить на обсуждение
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalCRUD;
