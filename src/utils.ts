import { IUser } from "./type";

export const getNewId = (users: IUser[]) => {
  return Math.max(...users.map((o) => o.id)) + 1;
};

export const generateRequestData = (data: any, id?: number) => {
  const form: any = {
    name: data.name,
    email: data.email,
    gender: data.gender,
    address: {
      street: data.street,
      city: data.city,
    },
    phone: data.phone,
  };

  if (id) {
    form.id = id;
  }

  return form;
};
