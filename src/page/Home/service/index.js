import request from "@src/util/umiRequest.js";

export async function getPageData(params) {
  const data = await request("/api/v1/getPageData", {
    method: "get",
    params,
  });
  return data;
}

export async function signIn(params) {
  const data = await request("/api/v2/signIn", {
    method: "post",
    data: {
      ...params,
    },
  });
  return data;
}
