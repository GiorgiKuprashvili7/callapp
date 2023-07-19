import { Button, Table, Modal, Input, Select, Form, ModalProps } from "antd";
import { Option } from "antd/lib/mentions";

import { useEffect, useState } from "react";
import useStore from "store";
import { addUser, deleteUser, getUserData } from "Api";
import { getNewId } from "utils";

type addOrUpdateModalProps = {
  isCreateModal: Boolean;
  openUpdateModal: () => void;
} & ModalProps;

const { Option: AntOption } = Select;

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const AddOrUpdateModal = (props: addOrUpdateModalProps) => {
  const [form] = Form.useForm();
  const [data, setData] = useState<any>(null);

  const handleSubmit = (values: any) => {
    // Do something with the form data, e.g., send it to the server
    console.log(values);
  };

  const fetchById = async (id: number) => {
    try {
      // Your getById API call here and set the data state
      // For example:
      // const response = await api.getById(id);
      // setData(response.data);
      setData({
        name: "John Doe",
        email: "john@example.com",
        gender: "male",
        street: "123 Main St",
        city: "New York",
        phone: "123-456-7890",
      });
    } catch (error) {
      // Handle error
    }
  };
  // fetchUsers();

  useEffect(() => {
    fetchById(props.);
  }, []);

  return (
    <Modal
      title={props.isCreateModal ? "Add Client" : "Update Client"}
      open={props.open}
      onCancel={props.onCancel}
      onOk={props.onOk}
    >
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Invalid email format" },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please select your gender" }]}
        >
          <Select>
            {genderOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Street"
          name="street"
          rules={[
            { required: true, message: "Please enter your street address" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please enter your city" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddOrUpdateModal;
