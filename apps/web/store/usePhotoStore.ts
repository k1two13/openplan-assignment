import { PhotoStore } from '@/types/photo';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePhotoStore = create<PhotoStore>()(
  persist(
    (set) => ({
      photo: null,
      hasViewed: false,
      setPhoto: (data) => set({ photo: data, hasViewed: true }),
      setHasViewed: (hasViewed) => set({ hasViewed: hasViewed }),
    }),
    {
      name: 'photo',
    }
  )
);
