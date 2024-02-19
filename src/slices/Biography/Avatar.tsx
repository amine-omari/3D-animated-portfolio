import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";

type AvatarProps = {
  image: ImageField;
  className: string;
};

export default function Avatar({ image, className }: AvatarProps) {
  return (
    <PrismicNextImage
      field={image}
      className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
    />
  );
}
