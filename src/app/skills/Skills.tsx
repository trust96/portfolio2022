import Card from "app/card/Card";
import Container from "app/container/Container";
import Progess from "app/progress/Progess";
import Section from "app/section/Section";
import Text from "app/text/Text";
import Title from "app/title/Title";
import React from "react";

type Props = {};

export default function Skills({}: Props) {
  return (
    <Section className="pt-0 bg-purple-200" id="skills">
      <Container>
        <Text tag="p" variant="overline" className="font-bold mb-3 text-center">
          I know that I know nothing
        </Text>
        <div className="flex flex-wrap justify-between">
          <Card className="bg-gray-50 basis-full xl:basis-1/3 mb-5 xl:mb-0">
            <Card.Header>
              <Title tag="h3" variant="quinary">
                Front end
              </Title>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <p className="mr-3 font-bold">HTML</p>{" "}
                <Progess
                  percentage="80%"
                  width="w-4/5"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">CSS</p>{" "}
                <Progess
                  percentage="80%"
                  width="w-4/5"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">SASS</p>{" "}
                <Progess
                  percentage="80%"
                  width="w-4/5"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">JAVASCRIPT</p>{" "}
                <Progess
                  percentage="80%"
                  width="w-4/5"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">TYPESCRIPT</p>{" "}
                <Progess
                  percentage="80%"
                  width="w-4/5"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">REACT</p>{" "}
                <Progess
                  percentage="80%"
                  width="w-4/5"
                  className="self-center"
                />
              </div>
            </Card.Body>
          </Card>
          <Card className="bg-gray-50 basis-full md:basis-1/2 xl:basis-1/3 mb-5 xl:mb-0">
            <Card.Header>
              <Title tag="h3" variant="quinary">
                Backend
              </Title>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <p className="mr-3 font-bold">NODEJS</p>{" "}
                <Progess
                  percentage="80%"
                  width="w-4/5"
                  className="self-center"
                />
              </div>
              <div className="mb-3">
                <p className="mr-3 font-bold">EXPRESSJS</p>{" "}
                <Progess
                  percentage="80%"
                  width="w-4/5"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">MYSQL</p>{" "}
                <Progess
                  percentage="80%"
                  width="w-4/5"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">PHP</p>{" "}
                <Progess
                  percentage="16%"
                  width="w-1/6"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">PYTHON</p>{" "}
                <Progess
                  percentage="16%"
                  width="w-1/6"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">POSTGRESQL</p>{" "}
                <Progess
                  percentage="80%"
                  width="w-4/5"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">C#</p>{" "}
                <Progess
                  percentage="16%"
                  width="w-1/6"
                  className="self-center"
                />
              </div>
            </Card.Body>
          </Card>
          <Card className="bg-gray-50 basis-full md:basis-1/2 xl:basis-1/3">
            <Card.Header>
              <Title tag="h3" variant="quinary">
                Others
              </Title>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <p className="mr-3 font-bold">POWERSHELL</p>{" "}
                <Progess
                  percentage="50%"
                  width="w-1/2"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">BASH</p>
                <Progess
                  percentage="50%"
                  width="w-1/2"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">GIT</p>
                <Progess
                  percentage="50%"
                  width="w-1/2"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">GITHUB ACTIONS</p>{" "}
                <Progess
                  percentage="80%"
                  width="w-4/5"
                  className="self-center"
                />
              </div>
              <div className=" mb-3">
                <p className="mr-3 font-bold">TESTING</p>{" "}
                <Progess
                  percentage="33%"
                  width="w-1/3"
                  className="self-center"
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
