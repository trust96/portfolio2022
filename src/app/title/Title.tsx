import React from "react";
import style from "./title.module.css";
type Props = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "quinary"
    | "senary";
  color?: "primary" | "secondary" | "accent" | "warning" | "success" | "danger";
};

export default function Title({
  children,
  tag: Tag,
  className = "",
  variant,
  color,
}: Props) {
  return (
    <Tag
      className={`${className} ${style.title} ${setVariant(variant)} ${setColor(
        color
      )}`}
    >
      {children}
    </Tag>
  );
}

function setVariant(variant: string) {
  switch (variant) {
    case "primary":
      return style.primary;
    case "secondary":
      return style.secondary;
    case "tertiary":
      return style.tertiary;
    case "quaternary":
      return style.quaternary;
    case "quinary":
      return style.quinary;
    case "senary":
      return style.senary;
    default:
      return "";
  }
}

function setColor(color: string) {
  switch (color) {
    case "primary":
      return style.color_primary;
    case "secondary":
      return style.color_secondary;
    case "accent":
      return style.color_accent;
    case "warning":
      return style.color_warning;
    case "success":
      return style.color_success;
    case "danger":
      return style.color_danger;
    default:
      return "";
  }
}
