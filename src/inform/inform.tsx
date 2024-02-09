import React from "react";
import {
  Card,
  Cascader,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
} from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 30 },
    sm: { span: 10 },
  },
  wrapperCol: {
    xs: { span: 30 },
    sm: { span: 20 },
  },
};

const Inform: React.FC = () => (
  <Card title="Personal Information">
    <Form {...formItemLayout} variant="filled">
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginRight: "16px" }}>
          <Form.Item
            label="National ID :"
            name="nationalID"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number :"
            name="phoneNumber"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Birth Date"
            name="birthDate"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Mentions />
          </Form.Item>
        </div>

        <div style={{ flex: 1 }}>
          <Form.Item
            label="Nick Name :"
            name="nickName"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          {/* เพิ่ม Form.Item อื่น ๆ ที่ต้องการในส่วนขวา */}
          <Form.Item
            label="Nationality"
            name="nationality"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Select />
          </Form.Item>

          <Form.Item
            label="Religion"
            name="religion"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Cascader />
          </Form.Item>

          <Form.Item
            label="Race"
            name="race"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <TreeSelect />
          </Form.Item>
        </div>
      </div>
    </Form>
  </Card>
);

export default Inform;
