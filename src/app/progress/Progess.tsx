import React from "react";

type Props = {
  width?: string;
  percentage?: string;
  className?: string;
};

export default function Progess({ percentage, width, className = "" }: Props) {
  return (
    <div
      className={`w-full bg-gray-200 rounded-full dark:bg-gray-700 ${className}`}
    >
      <div
        className={`bg-purple-200 text-xs font-medium text-center p-0.5 leading-none rounded-full ${width} `}
      >
        {percentage}
      </div>
    </div>
  );
}
