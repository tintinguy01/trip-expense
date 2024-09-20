import { create } from "zustand";

type SignupStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useSignup = create<SignupStore>((set) => ({
    isOpen: false,
    onOpen: () => {
        console.log("Opening modal");
        set({ isOpen: true });
    },
    onClose: () => {
        console.log("Closing modal");
        set({ isOpen: false });
    },
}));
