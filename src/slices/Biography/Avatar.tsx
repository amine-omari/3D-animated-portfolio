import { ImageField } from "@prismicio/client";
import React from "react";

type AvatarProps = {
  image: ImageField;
  className: string;
};

export default function Avatar({ image, className }: AvatarProps) {
  return <div>Avatar</div>;
}
