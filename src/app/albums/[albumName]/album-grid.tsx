"use client";

import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "../../../components/cloudinary-image";
import { SearchResult } from "../../gallery/page";

export default function AlbumGrid({ image }: { image: SearchResult[] }) {
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
