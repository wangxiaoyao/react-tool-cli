import React from "react";
import { Select, Input } from "antd";
import RuleTree, { DragItem } from "@aligov/gov-rule-tree";

class RuleTree_lib extends React.Component {
  render() {
    return (
      <RuleTree
        onChange={(changedValues) => {
          console.log("changedValues: ", changedValues);
        }}
        fields={[
          {
            id: "fruit",
            element: (
              <Select style={{ width: 150 }} placeholder="请选择">
                <Select.Option value="apple">apple</Select.Option>
                <Select.Option value="banana">banana</Select.Option>
              </Select>
            ),
          },
          {
            id: "operation",
            element: (
              <Select style={{ width: 150 }} placeholder="请选择">
                <Select.Option value=">">Greater Than</Select.Option>
                <Select.Option value="<">Less Than</Select.Option>
                <Select.Option value="=">Equal</Select.Option>
              </Select>
            ),
          },
          {
            id: "amount",
            rules: [
              {
                required: true,
                message: "数量不能为空",
              },
            ],
            element: <Input style={{ width: 200 }} placeholder="请输入数量" />,
          },
        ]}
      />
    );
  }
}
export default RuleTree_lib;
