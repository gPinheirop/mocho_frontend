import { create } from "zustand";
import { MemberSlice } from "../member/types";
import { createMemberSlice } from "../member/slice.ts";

export type Store = MemberSlice;

export const useStore = create<Store>((...a) => ({
  ...createMemberSlice(...a),
}));
