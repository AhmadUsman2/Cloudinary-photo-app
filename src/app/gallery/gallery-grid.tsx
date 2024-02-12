"use client";

import { ImageGrid } from "@/components/image-grid";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import { CloudinaryImage } from "../../components/cloudinary-image";
import { SearchResult } from "./page";

export default function GalleryGrid({ image }: { image: SearchResult[] }) {
  return (
    <ImageGrid
      image={image}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
          />
        );
      }}
    />
  );
}
