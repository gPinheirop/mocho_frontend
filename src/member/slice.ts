import { StateCreator } from "zustand";
import { MemberSlice } from "./types";
import { Store } from "../store";
import { memberApiService } from "./api/index";

export const createMemberSlice: StateCreator<Store, [], [], MemberSlice> = (
  set,
  get
) => ({
  accessToken: "",
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
      accessToken: result.data.access_token,
      loginLoading: false,
    });
    return true;
  },

  members: [],
  getAllMembers: async () => {
    const result = await memberApiService.getAllMembers();
    console.log(result);
    if (result.hasError) {
      console.error(result.error.response?.data);
      return false;
    }
    set({
      members: result.data,
    });
    return true;
  },

  member: null,
  getMember: async (id: string) => {
    const result = await memberApiService.getMember(id);
    console.log(result);
    if (result.hasError) {
      console.error(result.error.response?.data);
      return false;
    }
    set({
      member: result.data,
    });
    return true;
  },

  createMember: async (
    name: string,
    lastName: string,
    document: string,
    email: string,
    password: string,
    zipCode: string,
    street: string,
    state: string,
    neighborhood: string,
    number: string,
    role: number
  ) => {
    const result = await memberApiService.createMember(
      name,
      lastName,
      document,
      email,
      password,
      zipCode,
      street,
      state,
      neighborhood,
      number,
      role
    );
    console.log(result);
    if (result.hasError) {
      console.error(result.error.response?.data);
      return false;
    }
    return true;
  },

  updateMember: async (
    name: string,
    lastName: string,
    document: string,
    email: string,
    password: string,
    zipCode: string,
    street: string,
    state: string,
    neighborhood: string,
    number: string,
    role: number,
    id: string
  ) => {
    const result = await memberApiService.updateMember(
      name,
      lastName,
      document,
      email,
      password,
      zipCode,
      street,
      state,
      neighborhood,
      number,
      role,
      id
    );
    console.log(result);
    if (result.hasError) {
      console.error(result.error.response?.data);
      return false;
    }
    return true;
  },

  deleteMember: async (id: string) => {
    const result = await memberApiService.deleteMember(id);
    console.log(result);
    if (result.hasError) {
      console.error(result.error.response?.data);
      return false;
    }
    return true;
  },
});
