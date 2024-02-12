
import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

const MAX_COLUMNS = 4;

export function ImageGrid({
  image,
  getImage,
}: {
  image: SearchResult[];
  getImage: (imageData: SearchResult) => ReactNode;
}) {
  function getColumns(colIndex: number) {
    return image.filter((resource, idx) => idx % MAX_COLUMNS === colIndex);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {[0, 1, 2, 3].map((colIndex, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          {getColumns(colIndex).map (getImage)}
            
        </div>
      ))}
    </div>
  );
}
