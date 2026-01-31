import * as React from "react";

export type CircularGalleryItem = {
  image: string;
  text: string;
};

export interface CircularGalleryProps {
  items: CircularGalleryItem[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
}

declare const CircularGallery: React.FC<CircularGalleryProps>;
export default CircularGallery;
