import { create } from 'zustand';

export const useAppStore = create((set) => ({
    language: 'EN',
    setLanguage: (language) => set(() => ({ language })),
    routerPath: 'home',
    setRouterPath: (name) => set(() => ({ routerPath: name })),
    scrollRatio: 0,
    setScrollRatio: (value) => set(() => ({ scrollRatio: value })),
}));

export default useAppStore;
