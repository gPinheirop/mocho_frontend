import { create } from "zustand";
export type Store = {

};

export const useStore = create<Store>((set)=> ({
    // add states and their update functions
    // example : 0,
    // updateState: () => set((state) => ({ example: state.example + 1 })),
}))
