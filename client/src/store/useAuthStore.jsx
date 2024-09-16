import { create } from 'zustand'
import AuthService from '../services/AuthService';

const useAuthStore = create((set) => ({
    user: null,
    isAuth: false,
    setAuth: (bool) => set({ isAuth: bool }),
    setUser: (newUser) => set({ user: newUser }),

    login: async (email, password) => {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            set({ isAuth: true, user: response.data.user })
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    },

    registration: async (email, password) => {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            set({ isAuth: true, user: response.data.user })
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    },

    logout: async () => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token')
            set({ isAuth: false, user: null })
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}));

export { useAuthStore };