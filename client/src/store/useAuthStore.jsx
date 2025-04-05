import { create } from "zustand";
import AuthService from "../services/AuthService";
import axios from "axios";

const useAuthStore = create((set) => ({
  user: null,
  isAuth: false,
  isLoading: false,
  setAuth: (bool) => set({ isAuth: bool }),
  setUser: (newUser) => set({ user: newUser }),
  setIsLoading: (value) => set({ isLoading: value }),

  login: async (email, password) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      set({ isAuth: true, user: response.data.user_Dto });
    } catch (e) {
      console.log(e.response?.data?.message);
      return { error: true, message: e.response?.data?.message };
    }
  },

  registration: async (email, name, password) => {
    try {
      const response = await AuthService.registration(email, name, password);
      localStorage.setItem("token", response.data.accessToken);
      set({ isAuth: true, user: response.data.user_Dto });
    } catch (e) {
      console.log(e.response?.data?.message);
      return { error: true, message: e.response?.data?.message };
    }
  },

  logout: async () => {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      set({ isAuth: false, user: null });
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  },

  checkAuth: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get("http://localhost:8080/auth/refresh", {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      set({ isAuth: true, user: response.data.user_Dto });
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export { useAuthStore };
