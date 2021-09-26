import React from "react";
import { Link } from "react-router-dom";

import { Form, Input, Table } from "antd";

const DaftarBank = () => {
  const dataSource = [
    {
      key: "1",
      alamat: "Surabaya",
      bank: "BRI KCP Surabaya",
      no: "1",
    },
    {
      key: "2",
      alamat: "Jakarta Selatan",
      bank: "BRI KCP Jakarta Selatan",
      no: "2",
    },
  ];

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Bank",
      dataIndex: "bank",
      key: "age",
    },
    {
      title: "Alamat",
      dataIndex: "alamat",
      key: "alamat",
    },
    {
      title: "Lihat Detail Antrian",
      key: "link",
      render: () => {
        return <Link to="/detail-info-antrian/2">Lihat Detail</Link>;
      },
    },
  ];
  return (
    <div style={{ padding: "32px 64px" }}>
      <h1 className="text-center">Daftar Bank</h1>
      <Form style={{ maxWidth: "300px", marginBottom: 24 }}>
        <Input placeholder="search" />
      </Form>

      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default DaftarBank;
