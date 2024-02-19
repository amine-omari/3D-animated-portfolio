import { KeyTextField, LinkField } from "@prismicio/client";
import React from "react";

type ButtonProps = {
  linkField: LinkField;
  label: KeyTextField;
  showcon?: boolean;
  className: string;
};

export default function Button({
  linkField,
  label,
  showcon,
  className,
}: ButtonProps) {
  return <div>Button</div>;
}
