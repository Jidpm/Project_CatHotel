// import { create } from 'zustand';

// export const useAuthStore = create((set) => ({
//   // State
//   userData: null,
//   isLoggedIn: false,
//   myCats: [],

//   // Actions
//   setUserData: (userData) => set({ userData, isLoggedIn: !!userData }),

//   setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),

//   setMyCats: (myCats) => set({ myCats }),

//   addCat: (cat) => set((state) => ({ myCats: [...state.myCats, cat] })),

//   logout: () => set({
//     userData: null,
//     isLoggedIn: false,
//     myCats: []
//   }),

//   login: (userData) => set({
//     userData,
//     isLoggedIn: true
//   }),
// }));

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      // State
      userData: null,
      isLoggedIn: false,
      myCats: [],

      // Actions
      setUserData: (userData) => set({ userData, isLoggedIn: !!userData }),

      setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),

      setMyCats: (myCats) => set({ myCats }),

      addCat: (cat) =>
        set((state) => ({
          myCats: [...state.myCats, cat],
        })),

      logout: () =>
        set({
          userData: null,
          isLoggedIn: false,
          myCats: [],
        }),

      login: (userData) =>
        set({
          userData,
          isLoggedIn: true,
        }),
    }),

    {
      name: "auth-storage", // ชื่อ key ใน localStorage
      partialize: (state) => ({
        userData: state.userData,
        isLoggedIn: state.isLoggedIn,
        myCats: state.myCats,
      }),
    }
  )
);

