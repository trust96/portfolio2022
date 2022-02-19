import Text from "app/text/Text";
import Title from "app/title/Title";
import React from "react";

type Props = {
  timeline: {
    title: string;
    text: string;
    date: string;
  }[];
};

export default function Timeline({ timeline }: Props) {
  return (
    <>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {timeline.map(({ date, title, text }, index) => (
          <li key={title} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {date}
            </time>
            <Title
              tag="h3"
              variant="quinary"
              className="text-lg font-semibold text-gray-900 dark:text-white"
            >
              {title}
            </Title>
            <Text
              tag="p"
              variant="subtitle2"
              className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
            >
              {text}
            </Text>
          </li>
        ))}
      </ol>
    </>
  );
}
