import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000",
});

export const get = async (url) => {
  try {
    const response = await client.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
