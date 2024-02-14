"use client";

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "tint"
    | "effects"
    | "background"
  >();

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>
        <div className="flex gap-4">
          <Button
            variant={"ghost"}
            onClick={() => setTransformation(undefined)}
          >
            Clear All
          </Button>
          <Button onClick={() => setTransformation("generative-fill")}>
            Apply Generative Fill
          </Button>
          <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
          <Button onClick={() => setTransformation("grayscale")}>
            Convert to Grey
          </Button>
          <Button onClick={() => setTransformation("pixelate")}>
            Pixelate
          </Button>
          <Button onClick={() => setTransformation("tint")}>Tint</Button>
          <Button onClick={() => setTransformation("effects")}>Effects</Button>
          <Button onClick={() => setTransformation("background")}>Remove Background</Button>

        </div>
        <div className="grid grid-cols-2 gap-12">
          <CldImage
            src={publicId}
            width="400"
            height="300"
            alt="an image of something"
          />
          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              fillBackground
              alt=""
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          )}
          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              blur="800"
              alt=""
            />
          )}
          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              grayscale
              alt=""
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              pixelate
              alt=""
            />
          )}
          {transformation === "tint" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              tint="equalize:80:blue:blueviolet"
              alt=""
            />
          )}
          {transformation === "background" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              removeBackground
              alt=""
            />
          )}
          {transformation === "effects" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              effects={[
                {
                  background: "green",
                },
                {
                  gradientFade: true,
                },
                {
                  gradientFade: "symetric,x_0.5",
                },
              ]}
              alt=""
            />
          )}
        </div>
      </div>
    </section>
  );
}
