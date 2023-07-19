import { Button, Table, Modal, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import useStore from "../store";
import { addUser, deleteUser, getUserData } from "../Api";

import AddOrUpdateModal from "../components/addOrUpdateModal";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCreateModal, setIsCreateModal] = useState(false);

  const { users, setUsers } = useStore();

  let colums = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Gender",
      dataIndex: "gender",
    },
    {
      key: "5",
      title: "Phone",
      dataIndex: "phone",
    },
    {
      key: "6",
      title: "Street",
      dataIndex: "street",
    },
    {
      key: "7",
      title: "City",
      dataIndex: "city",
    },
    {
      key: "8",
      render: (record: any) => {
        return (
          <DeleteOutlined
            onClick={() => {
              deleteItem(record);
            }}
          />
        );
      },
    },
  ];

  const fetchUsers = () => {
    getUserData().then((resp) => {
      setUsers(resp.data);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteItem = (record: any) => {
    Modal.confirm({
      title: "are u sure, you want to delete",
      onOk: async () => {
        await deleteUser(record.id);
        fetchUsers();
      },
    });
  };

  const openCreateModal = () => {
    setIsOpen(true);
    setIsCreateModal(true);
  };

  const openUpdateModal = (record: any) => {
    console.log(record);
    setIsCreateModal(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsCreateModal(true);
  };

  return (
    <>
      <Button onClick={openCreateModal}>Add</Button>

      <Table
        columns={colums}
        dataSource={users.map((o: any) => ({
          ...o,
          street: o.address.street,
          city: o.address.city,
        }))}
        onRow={(record) => ({
          onDoubleClick: () => openUpdateModal(record),
        })}
      />

      <AddOrUpdateModal
        open={isOpen}
        isCreateModal={isCreateModal}
        
        onCancel={closeModal}
      />
    </>
  );
}

export default Home;
