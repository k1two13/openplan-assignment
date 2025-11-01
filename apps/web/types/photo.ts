export type Photo = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export type PhotoStore = {
  photo: Photo | null;
  hasViewed: boolean;
  setPhoto: (photo: Photo | null) => void;
  setHasViewed: (hasViewed: boolean) => void;
};
