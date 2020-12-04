import React, { useEffect } from "react";
import { Form, Select, DatePicker, Button } from "antd";
import moment from "moment";
import styles from "./style.less";

const TopForm = (props) => {
  const { form, handleSubmit } = props;
  const { Option } = Select;

  const onFinish = () => {
    const result = form.getFieldValue("executeTime");
    console.log("验证getFieldValue", result);
    const result1 = form.getFieldsValue();
    console.log("验证getFieldsValue", result1);
    form.validateFields().then((formVal) => {
      handleSubmit(formVal);
    });
  };

  // 重置
  const handleReset = () => {
    const nowDate = moment().format("YYYY-MM");
    form.setFieldsValue({
      executeTime: moment(nowDate, "YYYY-MM"),
      planStatus: "",
    });
  };

  // 进入设置默认值
  useEffect(() => {
    const nowDate = moment().format("YYYY-MM");
    form.setFieldsValue({
      executeTime: moment(nowDate, "YYYY-MM"),
      planStatus: "",
    });
  }, [form]);

  return (
    <div className={styles.topForm}>
      <Form form={form} style={{ display: "flex" }}>
        <Form.Item name="executeTime" label="执行月份">
          <DatePicker picker="month" style={{ width: "220px" }} />
        </Form.Item>

        {/* <Form.Item
          name="planStatus"
          label="规划状态"
          style={{ marginLeft: "16px" }}
        >
          <Select style={{ width: "220px" }}>
            <Option value="" key="1">
              全部
            </Option>
            {statusList.map((item) => (
              <Option value={item.code} key={item.name}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item> */}

        <Form.Item style={{ marginLeft: "24px" }}>
          <Button
            type="primary"
            onClick={onFinish}
            style={{ marginRight: "10px" }}
          >
            查询
          </Button>
          <Button onClick={handleReset}>重置</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TopForm;
