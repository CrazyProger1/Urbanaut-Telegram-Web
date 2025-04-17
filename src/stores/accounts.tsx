import { create } from "zustand";
import { SessionUser } from "@/types/users";

interface Actions {
  setUser: (user: SessionUser) => void;
}

interface State {
  user?: SessionUser;
}

const useAccountStore = create<State & Actions>((set) => ({
  user: undefined,
  setUser: (user: SessionUser) => {
    set({ user: user });
  },
}));

export default useAccountStore;
