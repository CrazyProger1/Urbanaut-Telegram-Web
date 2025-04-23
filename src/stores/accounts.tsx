import { create } from "zustand";
import { SessionUser, Settings } from "@/types/users";

interface Actions {
  setUser: (user: SessionUser) => void;
  updateUserSettings: (settings: Settings) => void;
}

interface State {
  user?: SessionUser;
}

const useAccountStore = create<State & Actions>((set, get) => ({
  user: undefined,
  setUser: (user: SessionUser) => {
    set({ user: user });
  },
  updateUserSettings: (settings: Settings) => {
    const currentUser = get().user;
    if (currentUser) {
      set({ user: { ...currentUser, settings: settings } });
    }
  },
}));

export default useAccountStore;
