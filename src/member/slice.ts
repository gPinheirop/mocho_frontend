import { StateCreator } from "zustand";
import { MemberSlice } from "./types";
import { Store } from "../store";
import { memberApiService } from "./api/index";

export const createMemberSlice: StateCreator<Store, [], [], MemberSlice> = (
  set,
  get
) => ({
  accessToken: "",
  updateAccessToken: () => {},
  deleteToken: () => set({ accessToken: "" }),
  loginLoading: false,
  login: async (email: string, password: string) => {
    set({ loginLoading: true });
    const result = await memberApiService.signIn(email, password);
    console.log(result);
    if (result.hasError) {
      console.error(result.error.response?.data);
      set({ loginLoading: false });
      return false;
    }
    set({
      accessToken: result.data.access,
      loginLoading: false,
    });
    return true;
  },
});
