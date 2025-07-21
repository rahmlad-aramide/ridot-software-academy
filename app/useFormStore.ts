// stores/useFormStore.ts
import { create } from 'zustand';

interface FormStore {
  isFormOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

export const useFormStore = create<FormStore>((set) => ({
  isFormOpen: false,
  openForm: () => set({ isFormOpen: true }),
  closeForm: () => set({ isFormOpen: false }),
}));
