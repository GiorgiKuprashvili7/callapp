import axios from "axios";
import { IUser } from "./type";

const baseUrl = "http://localhost:3000/";

export const getUserData = async () => {
  const res = await axios.get(baseUrl + "user?_sort=id");
  return res;
};
export const deleteUser = async (userId: number) => {
  const res = await axios.delete(baseUrl + `user/${userId}`);
  return res;
};

export const addUser = async (user: IUser) => {
  await axios.post(baseUrl + `user`, user);
};
