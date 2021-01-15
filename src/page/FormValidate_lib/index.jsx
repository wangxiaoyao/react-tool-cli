import React from "react";
import { Form, Input } from "antd";
import {
  positiveNumValidator,
  numValidator,
  phoneValidator,
  charValidator,
} from "./util";

const FormValidate_lib = () => {
  const [form] = Form.useForm();
  const submitForm = () => {
    form.validateFields().then((formVal) => {
      console.log("所有的表单值formVal", formVal);
    });
  };
  return (
    <div>
      <h1>表单验证:</h1>
      <Form form={form}>
        <Form.Item
          style={{ width: "250px" }}
          name="正数金额"
          label="正数金额（小数，0）"
          rules={[
            {
              required: true,
              message: "不能为空",
              whitespace: true,
            },
            positiveNumValidator,
          ]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          style={{ width: "250px" }}
          name="任意金额"
          label="任意金额（保留2位,可以空）"
          rules={[numValidator]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          style={{ width: "250px" }}
          name="电话"
          label="电话号码"
          rules={[
            {
              required: true,
              message: "不能为空",
              whitespace: true,
            },
            phoneValidator,
          ]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          style={{ width: "250px" }}
          name="中文字符"
          label="中文字符"
          rules={[
            {
              required: true,
              message: "不能为空",
              whitespace: true,
            },
            charValidator,
          ]}
        >
          <Input></Input>
        </Form.Item>
      </Form>
      <button onClick={submitForm}>提交表单</button>
    </div>
  );
};

export default FormValidate_lib;
