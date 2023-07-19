import create from "zustand";
import { IUser } from "./type";

interface CounterState {
  setUsers: (newUsers: any) => void;
  users: IUser[];
}

const useStore = create<CounterState>((set) => ({
  users: [],
  setUsers: (newUsers: any) => {
    set({ users: newUsers });
  },
}));

export default useStore;
