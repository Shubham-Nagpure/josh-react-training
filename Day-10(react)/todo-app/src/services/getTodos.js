import { get } from "./axios";

export default async function getTodos() {
  return await get("/todos");
}