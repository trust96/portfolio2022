import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {
  size?: "small" | "medium" | "large";
}

export default function Logo({ size = "small" }: Props): ReactElement {
  return (
    <Link href="/">
      <a className="">
        <Image
          src="/logo.svg"
          width={size === "small" ? "100" : size === "medium" ? "200" : "300"}
          height={size === "small" ? "32" : size === "medium" ? "200" : "300"}
          alt="logo"
        />
      </a>
    </Link>
  );
}
