import React from "react";
import style from "./text.module.css";
type Props = {
  tag: "p" | "span" | "i" | "strong" | "small" | "label";
  children: React.ReactNode;
  className?: string;
  variant?:
    | "subtitle"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline";
  color?: "primary" | "secondary" | "accent" | "warning" | "success" | "danger";
};

export default function Text({
  children = "",
  tag: Tag,
  className,
  variant,
  color,
}: Props) {
  return (
    <Tag className={`${className} ${setVariant(variant)} ${setColor(color)}`}>
      {children}
    </Tag>
  );
}
function setVariant(variant: string) {
  switch (variant) {
    case "subtitle":
      return style.subtitle;
    case "subtitle2":
      return style.subtitle2;
    case "body1":
      return style.body1;
    case "body2":
      return style.body2;
    case "caption":
      return style.caption;
    case "overline":
      return style.overline;
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
