import { create } from "zustand";
export type Store = {
  accessToken: string;
  deleteToken: () => void
  loginLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
};

export const useStore = create<Store>((set) => ({
  // add states and their update functions
  // example : 0,
  // updateState: () => set((state) => ({ example: state.example + 1 })),
  accessToken: "",
  updateAccessToken: () => {},
  deleteToken: () => set({ accessToken: "" }),
  loginLoading: false,
  login: async (email: string, password: string) => {
    set({loginLoading: true});
    // create login api call
    // set({
    //   accessToken: result.data.access,
    //   loginLoading: false,
    // });
  },

}));
