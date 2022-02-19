import Container from "app/container/Container";
import Section from "app/section/Section";
import Text from "app/text/Text";
import Timeline from "app/timeline/Timeline";
import React from "react";
import { timeline } from "../../data/app/exp";

type Props = {};
export default function Exp({}: Props) {
  return (
    <Section className="pt-0">
      <Container>
        <Text tag="p" variant="overline" className="font-bold mb-3 text-center">
          what i have been up to
        </Text>

        <Timeline timeline={timeline} />
      </Container>
    </Section>
  );
}
