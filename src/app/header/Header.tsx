import Container from "app/container/Container";
import Image from "app/image/Image";
import Section from "app/section/Section";
import Text from "app/text/Text";
import Title from "app/title/Title";
import React from "react";
import Typewriter from "typewriter-effect";
import me from "../../../public/me.jpeg";
type Props = {};

const Header = (props: Props) => {
  return (
    <Section>
      <Container>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="basis-52 shrink-0">
            <Image src={me} alt={""} />
          </div>{" "}
          <div className="self-center">
            {" "}
            <Title tag="h3" variant="primary" className="">
              Hello there!
            </Title>
            <Title tag="h3" variant="tertiary" className="">
              {" "}
              I&apos;m
              <Text tag="span" color="primary">
                {" "}
                Trust
              </Text>
              , a fullstack developer.
            </Title>
            <Text tag="p" variant="subtitle" className="text">
              I love coding, i love to learn new things, i love to make things,
              i love to make things that make people happy.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Header;
