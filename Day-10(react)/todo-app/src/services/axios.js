import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

axiosInstance.defaults.headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const request = async (url, data, method) => {
  const onSuccess = (res) => {
    return res.data;
  };

  const onError = (res) => {
    return res.error;
  }

  try {
    const res = await axiosInstance.request({
      url,
      method,
      data,
    });
    return onSuccess(res);
  } catch (error) {
    return onError(error);
  }
};

const _get = async (url, data) => {
  return await request(url, data, "get");
};
const _post = async (url, data) => {
  return await request(url, data, "post");
};
const _put = async (url, data) => {
  return await request(url, data, "put");
};
const _delete = async (url, data) => {
  return await request(url, data, "delete");
};

const client = {
  get: _get,
  post: _post,
  put: _put,
  delete: _delete,
};

export default client;

