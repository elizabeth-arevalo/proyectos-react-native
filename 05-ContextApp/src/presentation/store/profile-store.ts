import { create } from "zustand";

export interface ProfileState {
    name: string;
    email: string;

    changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>()((set, get) => ({
    email: "jonh.doe@example.com",
    name: "Jonh Doe",
    changeProfile: (name: string, email: string) => {
        set({ name, email });
        console.log(get());
    },
}));
