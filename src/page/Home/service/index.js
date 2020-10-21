import request from "@src/util/umiRequest.js";

export async function signIn(params) {
  const data = await request("/api/v2/signIn", {
    method: "post",
    data: {
      ...params,
    },
  });
  return data;
}

export async function getAsyncDataRedux(params) {
  const data = await request("/api/v2/getAsyncDataRedux", {
    method: "get",
    params,
  });
  return data;
}
