"use client";

import { SearchResult } from "../gallery/page";
import { CloudinaryImage } from "../../components/cloudinary-image";
import { useEffect, useState } from "react";
import { ImageGrid } from "@/components/image-grid";

export default function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <ImageGrid image={resources}
    
    getImage={(imageData: SearchResult)=>{
      return(
        <CloudinaryImage
        key={imageData.public_id}
        imageData={imageData}
        width="400"
        height="300"
        alt="an image of something"
        onUnheart={(unheartedResource) => {
          setResources((currentResources) =>
            currentResources.filter(
              (resources) =>
                resources.public_id !== unheartedResource.public_id
            )
          );
        }}
      />
      )
    }}/>
  );
}
