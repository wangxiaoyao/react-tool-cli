import React, { Fragment } from "react";
import { Table } from "antd";

const ShowTable = ({
  // 表的数据
  showTableData,
  // 重新请求表数据的函数
  getShowTableDataFun,
  // 头部form数据：用来分页
  headFormVal,
}) => {
  // 分页
  let paginationProps = {};
  if (
    showTableData.paginator &&
    Object.keys(showTableData.paginator).length !== 0
  ) {
    paginationProps = {
      // 数据总数
      total: showTableData.paginator.items,
      // 当前页码
      current: showTableData.paginator.page,
      // 每页多少数据：若是后端控制此处不需要设置
      // pageSize: 10,
      // 是否展示每页多少数据
      showSizeChanger: true,
      // 是否支持快速跳转
      showQuickJumper: true,
      // 共有多少条数据
      showTotal: (total) => `共有 ${total} 条`,
    };
  }
  // 行
  const columns = [
    {
      title: "执行月份",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "规划状态",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        switch (text) {
          case "DAISHENGXIAO":
            return <p>待生效</p>;
          case "YISHENGXIAO":
            return <p>已生效</p>;
          case "YISHIXIAO":
            return <p>已失效</p>;
          default:
            break;
        }
      },
    },
    {
      title: "变更人",
      dataIndex: "operator",
      key: "operator",
    },
    {
      title: "变更时间",
      dataIndex: "gmtModified",
      key: "gmtModified",
    },
    {
      title: "操作",
      dataIndex: "result",
      key: "result",
      render: (text, record) => <div>{record.id}</div>,
    },
  ];

  // 改变页码
  const handleChangePageNum = (page) => {
    // 当调到第3页， 而此时调整每页条数，此时的page.current从第一页开始。这是符合逻辑的
    const params = {
      ...headFormVal,
      pageNo: page.current,
      pageSize: page.pageSize,
    };
    getShowTableDataFun(params);
  };
  return (
    <Fragment>
      <Table
        style={{ marginTop: "20px" }}
        size="middle"
        columns={columns}
        dataSource={showTableData.resultList || []}
        pagination={paginationProps}
        // 页码改变的回调
        onChange={handleChangePageNum}
      />
    </Fragment>
  );
};

export default ShowTable;
