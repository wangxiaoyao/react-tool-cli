import React, { useState } from "react";
import { Form, Input } from "antd";

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
          name="name"
          label="表单验证"
          rules={[
            {
              required: true,
              message: "不能为空",
            },
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
