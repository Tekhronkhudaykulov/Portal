import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import "./index.scss";

type DataType = {
  key: string;
  id: string | number;
  age: number;
  address: string;
  tags: string[];
  titleName: string;
  type: string;
  dateStart: string | number;
  dateEnd: string;
  name: string;
  inspector: string;
  status: string;
  action: string[];
};

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Название",
    dataIndex: "titleName",
    key: "titleName",
  },
  {
    title: "Тип",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Дата начала",
    key: "dateStart",
    dataIndex: "dateStart",
  },
  {
    title: "Дата конца",
    key: "dateEnd",
    dataIndex: "dateEnd",
  },
  {
    title: "Исполнитель",
    key: "name",
    dataIndex: "name",
  },
  {
    title: "Проверяющий",
    key: "inspector",
    dataIndex: "inspector",
  },
  {
    title: "Статус",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Действие",
    key: "action",
    dataIndex: "action",
  },
];

const data: DataType[] = [
  {
    id: "124",
    titleName: "Название",
    age: 30,
    action: [""],
    key: "",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
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
