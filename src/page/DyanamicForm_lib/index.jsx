import React, { useState } from "react";
import { Form, Input } from "antd";
import style from "./style.less";

const DyanamicForm_lib = () => {
  const [form] = Form.useForm();
  const [dyaItemArr, setDyaItemArr] = useState([]);

  // 增
  const handleAddItem = () => {
    const num = (dyaItemArr[dyaItemArr.length - 1] || 0) + 1;
    const result = [...dyaItemArr, num];
    setDyaItemArr(result);
  };
  // 减
  const handleDelItem = (item) => {
    // 清空表单
    form.setFieldsValue({
      [`name${item}`]: "",
    });
    const result = dyaItemArr.filter((val) => val !== item);
    setDyaItemArr(result);
  };
  const submitForm = () => {
    form.validateFields().then((formVal) => {
      // 对提交的表单进行处理
      const result = [];
      dyaItemArr.map((item) => {
        const val = {
          [`name${item}`]: formVal[`name${item}`],
        };
        result.push(val);
      });
      console.log("所有的表单值formVal", formVal);
      console.log("dyaItemArr", dyaItemArr);
      console.log("真正的表单值", result);
    });
  };
  return (
    <div className={style.dyanamicForm}>
      <h1>动态增加/减少表单:</h1>
      <Form form={form} name="dyaForm">
        {dyaItemArr.length !== 0 &&
          dyaItemArr.map((item) => (
            <div className={style.dyaItem}>
              <Form.Item
                name={`name${item}`}
                label="姓名"
                rules={[{ required: true, message: "不能为空" }]}
              >
                <Input style={{ width: "136px" }}></Input>
              </Form.Item>
              <span
                onClick={() => {
                  handleDelItem(item);
                }}
              >
                删除
              </span>
            </div>
          ))}
      </Form>
      <button onClick={handleAddItem}>新增</button>
      <button onClick={submitForm}>提交表单</button>
    </div>
  );
};

export default DyanamicForm_lib;
