import React, { useEffect, useState } from "react";
import { Form } from "antd";
import moment from "moment";
import TopForm from "./TopForm";
import ShowTable from "./ShowTable";
// import { showTableDataService } from "./service";
import styles from "./style.less";

const dataMock = {
  detailMessage: "",
  errorCode: "",
  errorContext: null,
  errorMessage: "",
  obj: {
    paginator: {
      beginIndex: 1,
      endIndex: 11,
      firstPage: 1,
      items: 100, // 数据总数
      itemsPerPage: 200,
      lastPage: 1,
      length: 11,
      nextPage: 2,
      offset: 0,
      page: 2, // 当前页码
      pages: 5,
      previousPage: 1,
      slider: [1],
    },
    resultList: [
      {
        id: 1,
        month: "2020-12", // 执行月份
        status: "DAISHENGXIAO", // DAISHENGXIAO(待生效),YISHENGXIAO(已生效),YISHIXIAO(已失效)
        operator: "will.sw", // 变更人
        gmtModified: "2020-11-30 15:00", // 变更时间
      },
    ],
  },
  redirectInfo: null,
  success: true,
};

const FormTable_lib = () => {
  // 表数据
  const [showTableData, setShowTableData] = useState([]);
  // 固定头部form值:用来分页使用： 仅在查询时使用
  const [headFormVal, setHeadFormVal] = useState({});
  // 获取T30分页页面
  const getShowTableDataFun = async (params) => {
    console.log("params", params);
    // const data = await showTableDataService(params);
    setShowTableData(dataMock.obj);
  };

  // 点击查询： 默认第一页，10条数据
  const handleSubmit = (val) => {
    const params = {
      month: val.executeTime.format("YYYYMM"), // yyyyMM
      status: val.planStatus, // 选择全部时该值为空
      pageNo: 1,
      pageSize: 10,
    };
    setHeadFormVal(params);
    getShowTableDataFun(params);
  };

  const firstGetTableData = () => {
    const params = {
      month: moment().format("YYYY-MM"),
      status: "", // 选择全部时该值为空
      pageNo: 1,
      pageSize: 10,
    };
    setHeadFormVal(params);
    getShowTableDataFun(params);
  };

  useEffect(() => {
    // 默认首次进入获取数据
    firstGetTableData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [form] = Form.useForm();
  return (
    <div className={styles.FormTable_lib}>
      <div className={styles.head}>
        <p>table,form,moment的使用以及联动</p>
      </div>
      <TopForm form={form} handleSubmit={handleSubmit} />
      <ShowTable
        showTableData={showTableData}
        headFormVal={headFormVal}
        getShowTableDataFun={getShowTableDataFun}
      />
    </div>
  );
};

export default FormTable_lib;
