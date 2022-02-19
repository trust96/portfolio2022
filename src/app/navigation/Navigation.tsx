import Button from "app/button/Button";
import Container from "app/container/Container";
import Logo from "app/logo/Logo";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import style from "./navigation.module.css";
import Link from "next/link";
import { listItems, footerItems } from "../../data/app/navigation";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
export default function Navigation(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
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
                <Button tag="button" className="">
                  download cv
                </Button>
              </div>
            </Container>
            <div className="lg:hidden">
              <div className="flex justify-center mb-4">
                <a href="www.facebook.com">
                  <FaFacebookSquare
                    size={44}
                    className={`${style.icon} mr-8`}
                  />
                </a>
                <a href="instagram.com">
                  <FaInstagramSquare
                    size={44}
                    className={`${style.icon} mr-8`}
                  />
                </a>
                <a href="youtube.com">
                  <FaYoutubeSquare size={44} className={`${style.icon}`} />
                </a>
              </div>
              <ul className=" text-center">
                {footerItems.map(({ name, path }) => (
                  <li
                    className="flex items-center justify-center mb-2"
                    key={name}
                  >
                    <Link href={path}>
                      <a className={` text-base hover:underline`}>{name}</a>
                    </Link>
                  </li>
                ))}
              </ul>{" "}
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
