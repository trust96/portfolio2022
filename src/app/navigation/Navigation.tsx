import Button from "app/button/Button";
import Container from "app/container/Container";
import Logo from "app/logo/Logo";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import style from "./navigation.module.css";
import Link from "next/link";
import { listItems } from "../../data/app/navigation";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { useRouter } from "next/router";
export default function Navigation(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const router = useRouter();

  const ul = useRef<HTMLUListElement>(null);
  useEffect(() => {
    setWidth(ul.current.children[0].clientWidth);
    setLeft(ul.current.children[0].clientLeft);
  }, []);
  return (
    <nav className={`${style.nav}`}>
      <Container>
        <div className={`${style.wrapper}`}>
          <Logo />
          <div className={`${style.bar} ${isOpen && style.active}`}>
            <Container className="flex items-center flex-wrap lg:flex-nowrap">
              <ul ref={ul} className={`${style.list}`}>
                {listItems.map(({ name, path }) => (
                  <li
                    onClick={(e) => {
                      setWidth(e.currentTarget.offsetWidth);
                      setLeft(e.currentTarget.offsetLeft);
                      setIsOpen(false);
                    }}
                    className={`${style.item}`}
                    key={name}
                  >
                    <a className={`${style.link}`} href={path}>
                      {name}
                    </a>
                  </li>
                ))}
                <div
                  style={{ width, left }}
                  className={`${style.slider}`}
                ></div>
              </ul>
              <div className={`${style.button}`}>
                <Button
                  tag="button"
                  className=""
                  onClick={() => {
                    router.push("/CV.pdf");
                  }}
                >
                  download cv
                </Button>
              </div>
            </Container>
            <div className="lg:hidden">
              <div className="flex justify-center mb-4">
                <a
                  className="text-gray-700 hover:text-black mr-6"
                  href="https://github.com/trust96"
                >
                  <FaGithub size={26} />
                </a>
                <a
                  className="text-gray-700 hover:text-black"
                  href="linkedin.com/in/trust-oriabure-54ba431b5"
                >
                  <FaLinkedin size={26} />
                </a>
              </div>

              <div className="text-center bg-black text-white flex items-center justify-center">
                <span>All rights reserved to trust</span>
              </div>
            </div>
          </div>
          <button
            className={`${style.container}`}
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}
          >
            <span className="mr-2 uppercase text">Menu</span>

            <div className={`${style.menu}`}>
              <div
                className={`${style.menu_item_one} ${isOpen && style.top}`}
              ></div>
              <div
                className={`${style.menu_item_two} ${isOpen && style.center}`}
              ></div>
              <div
                className={`${style.menu_item_three} ${isOpen && style.bottom}`}
              ></div>
            </div>
          </button>
        </div>
      </Container>
    </nav>
  );
}
