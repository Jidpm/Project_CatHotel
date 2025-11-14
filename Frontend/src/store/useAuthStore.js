import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  // State
  userData: null,
  isLoggedIn: false,
  myCats: [],

  // Actions
  setUserData: (userData) => set({ userData, isLoggedIn: !!userData }),

  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),

  setMyCats: (myCats) => set({ myCats }),

  addCat: (cat) => set((state) => ({ myCats: [...state.myCats, cat] })),

  logout: () => set({
    userData: null,
    isLoggedIn: false,
    myCats: []
  }),

  login: (userData) => set({
    userData,
    isLoggedIn: true
  }),
}));
