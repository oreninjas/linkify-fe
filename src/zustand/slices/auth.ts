import { create } from "zustand";

const useAuthStore = create<{
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  userInfo: null | any;
  setUserInfo: (userInfo: any) => void;
}>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  userInfo: null,
  setUserInfo: (userInfo: any) => set({ userInfo }),
}));

export default useAuthStore;
