import { create } from "zustand";
import { MemberSlice } from "../member/types";
import { createMemberSlice } from "../member/slice.ts";
import { createProjectSlice } from "../project/slice.ts";
import { ProjectSlice } from "../project/types.ts";

export type Store = MemberSlice & ProjectSlice;

export const useStore = create<Store>((...a) => ({
  ...createMemberSlice(...a),
  ...createProjectSlice(...a),
}));
