import { UserType } from "../lib/types";
import createNewStore from "../lib/zustand";

interface GlobalStateType {
  user: UserType | null;
}

const initialState: GlobalStateType = {
  user: null,
};

export const globalState = createNewStore(initialState, {
  name: "global",
  devTools: true,
  persist: true,
});