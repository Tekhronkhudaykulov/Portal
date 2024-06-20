import React from "react";
import { DatePicker, Input, Select, Space, Table } from "antd";
import type { TableProps } from "antd";
import "./index.scss";
import { ActionFirstIcon, ActionSecondIcon } from "../../assets/icon";

type DataType = {
  id: string | number;
  address: string;
  type: string;
  dateStart: string | number;
  dateEnd: string;
  name: string;
  inspector: string;
  status: string;
};

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
    children: [
      {
        title: <Input placeholder="ID" />,
        key: "id",
        dataIndex: "id",
      },
    ],
  },
  {
    title: "Название",
    dataIndex: "titleName",
    key: "titleName",
    children: [
      {
        title: <Input placeholder="Название" />,
        key: "id",
        dataIndex: "id",
      },
    ],
  },
  {
    title: "Тип",
    dataIndex: "type",
    key: "type",
    children: [
      {
        title: <Input placeholder="Тип" />,
        key: "id",
        dataIndex: "id",
      },
    ],
  },
  {
    title: "Дата начала",
    key: "dateStart",
    dataIndex: "dateStart",
    children: [
      {
        title: <DatePicker placeholder="Выберите" />,
        key: "dateStart",
        dataIndex: "dateStart",
      },
    ],
  },
  {
    title: "Дата конца",
    key: "dateEnd",
    dataIndex: "dateEnd",
    children: [
      {
        title: <DatePicker placeholder="Выберите" />,
        key: "dateStart",
        dataIndex: "dateStart",
      },
    ],
  },
  {
    title: "Исполнитель",
    key: "name",
    dataIndex: "name",
    children: [
      {
        title: <Input placeholder="Выберите" />,
        key: "id",
        dataIndex: "id",
      },
    ],
  },
  {
    title: "Проверяющий",
    key: "inspector",
    dataIndex: "inspector",
    children: [
      {
        title: (
          <>
            <Select placeholder="Выберите">
              <Select.Option value="sample">Sample</Select.Option>
            </Select>
          </>
        ),
        key: "id",
        dataIndex: "id",
      },
    ],
  },
  {
    title: "Статус",
    key: "status",
    dataIndex: "status",
    children: [
      {
        title: (
          <>
            <Select placeholder="На обсуждении">
              <Select.Option value="sample">Sample</Select.Option>
            </Select>
          </>
        ),
        key: "status",
        dataIndex: "status",
      },
    ],
  },
  {
    title: "Действие",
    key: "action",
    dataIndex: "action",
    children: [
      {
        key: "action",
        dataIndex: "action",
      },
    ],
    render: (_, record) => (
      <Space size="middle">
        <div>
          <ActionFirstIcon />
          <ActionSecondIcon />
        </div>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    id: "124",
    address: "New York No. 1 Lake Park",
    type: "Наименование",
    dateStart: "11.05.2024",
    dateEnd: "11.05.2024",
    name: "Имя Фамилия",
    inspector: "Имя Фамилия",
    status: "На обсуждении",
  },
  {
    id: "124",

    address: "New York No. 1 Lake Park",

    type: "Наименование",
    dateStart: "11.05.2024",
    dateEnd: "11.05.2024",
    name: "Имя Фамилия",
    inspector: "Имя Фамилия",
    status: "На обсуждении",
  },
];

const TableForDashboard: React.FC = () => (
  <Table dataSource={data} columns={columns} />
);

export default TableForDashboard;
