import { ImageItem } from "./imageItem";
  
  export interface AlbumDetail {
    albumId: number;
    name: string;
    images: ImageItem[];
    totalItems: number;
  }
