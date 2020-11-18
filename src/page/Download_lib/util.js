import XLSX from "xlsx";
import moment from "moment";

// 将blob对象创建blobUrl，创建一个a标签，并创建一个点击事件
function openDownloadDialog(blob, fileName) {
  if (typeof blob === "object" && blob instanceof Blob) {
    blob = URL.createObjectURL(blob); // 创建blob地址，依据本地URL
    console.log("====================================");
    console.log(blob);
  }
  const aLink = document.createElement("a");
  aLink.href = blob;
  // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，有时候 file:///模式下不会生效
  aLink.download = fileName || "";
  let event;
  if (window.MouseEvent) event = new MouseEvent("click");
  //   移动端
  else {
    event = document.createEvent("MouseEvents");
    event.initMouseEvent(
      "click",
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
  }
  aLink.dispatchEvent(event);
}

// 将workbook转化成blob对象
function workbook2blob(workbook) {
  // 生成excel的配置项
  const wopts = {
    // 要生成的文件类型
    bookType: "xlsx",
    // // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    bookSST: false,
    type: "binary",
  };
  const wbout = XLSX.write(workbook, wopts);
  // 将字符串转ArrayBuffer
  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }
  const blob = new Blob([s2ab(wbout)], {
    type: "application/octet-stream",
  });
  return blob;
}

// 1 提取数据函数：包括子元素 组成二维数组
function getTableData(sheetData, data) {
  data.forEach((item) => {
    // 可以防止Excell转为科学计数法
    const arrItem = [item.name, `${item.num1}`, `${item.num2}`];
    sheetData.push(arrItem);
    if (item.children) {
      getTableData(sheetData, item.children);
    }
  });
  // 多维数组
  return sheetData;
}
/**
 * 表格下载：
 * @param {} arg
 */
export const downloadTableToExcel = (data) => {
  // 配上当前的时间
  const defaultDate = moment().format("YYYYMMDD");
  // 表格上面的空格以及通用数据
  const sheetData = [
    [null, "时点"],
    ["表名", "num1", "num2"],
    [null, null, null],
  ];
  const resolveData = getTableData(sheetData, data);

  // 1 将二维数组转为sheet
  const sheet = XLSX.utils.aoa_to_sheet(resolveData);
  // sheet配置表的合并单元格
  sheet["!merges"] = [{ s: { r: 0, c: 1 }, e: { r: 0, c: 3 } }];

  // 2 wb
  const wb = XLSX.utils.book_new();
  // 3 合
  XLSX.utils.book_append_sheet(wb, sheet);

  // 转为blob
  const workbookBlob = workbook2blob(wb);
  // 下载
  openDownloadDialog(workbookBlob, `表${defaultDate}.xlsx`);
};
