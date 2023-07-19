import { IUser } from "./type";

export const getNewId = (users: IUser[]) => {
  return Math.max(...users.map((o) => o.id)) + 1;
};
