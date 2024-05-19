"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" w-full flex justify-between p-5">
      <div className="ml-6">Logo</div>
      <div className="md:w-[50%] flex justify-end">
        <GiHamburgerMenu
          className={` ${isOpen ? "hidden" : "block"} md:hidden`}
          color="green"
          size={50}
          onClick={() => {
            setIsOpen(true);
          }}
        />

        <ul
          className={` ${
            isOpen ? "absolute" : "hidden md:flex"
          } right-0 top-0 w-full h-full z-10 flex flex-col justify-around items-center md:w-[100%] md:relative md:h-[auto] md:flex-row`}
        >
          <IoMdCloseCircleOutline
            className={`${
              isOpen ? "absolute" : "hidden"
            } top-4 right-4 md:hidden`}
            color="black"
            size={50}
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <li>
            <Link href="/shoes">Shoes</Link>
          </li>
          <li>
            <Link href="/surfbaords">Surfboards</Link>
          </li>
          <li>
            <Link href="/women">Women</Link>
          </li>
          <li>
            <Link href="/men">Men</Link>
          </li>
          <li>
            <Link href="/sunglasses">Sunglasses</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
