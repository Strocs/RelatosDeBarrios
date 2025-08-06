import { create } from 'zustand'

interface NavigationMenuState {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export const useNavigationMenuStore = create<NavigationMenuState>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
}))
