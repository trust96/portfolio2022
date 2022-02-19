import Image from "app/image/Image";
import Link from "next/link";
import React, { ReactElement } from "react";
import logo from "../../../public/logo.svg";
interface Props {
  size?: "small" | "medium" | "large";
}

export default function Logo({ size = "small" }: Props): ReactElement {
  return (
    <Link href="/">
      <a className="">
        <Image src={logo} alt="logo" />
      </a>
    </Link>
  );
}
