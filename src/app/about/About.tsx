import Container from "app/container/Container";
import Section from "app/section/Section";
import Text from "app/text/Text";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <Section className="bg-purple-200">
      <Container>
        <Text tag="p" variant="overline" className="font-bold mb-3 text-center">
          who am i
        </Text>
        <Text tag="p" variant="subtitle2" className="mb-2">
          Once upon a time, there was a guy named Trust. He was a fullstack...
          No, wait. i&apos;m just kidding. 😂
        </Text>
        <Text tag="p" variant="subtitle2" className="">
          Ok, now for real: Hello everyone, i&apos;m trust , i come from nigeria
          but i&apos;m currently based in Italy (for 15 years now). What can i
          say? I started coding in 2018 just for fun, then 2 years ago i started
          taking it seriously, then here i am.
        </Text>
      </Container>
    </Section>
  );
}
