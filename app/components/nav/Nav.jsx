"use client";

import useOffset from "@/app/hooks/useOffset";
import Link from "next/link";
import React, { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";

function Nav() {
  const [offSet] = useOffset();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${
        offSet > 30 ? "fixed" : "relative"
      } z-10 w-full transition ease-in-out ${
        offSet > 30 ? "top-0" : ""
      } flex md:justify-center items-center z-[100] bg-[#25597B] min-h-[9vh] text-white`}
    >
      <div className="md:hidden px-5 flex items-center justify-between w-full">
        {isOpen ? (
          <div onClick={() => setIsOpen(!isOpen)}>
            <ImCancelCircle className="text-3xl text-white" />
          </div>
        ) : (
          <div onClick={() => setIsOpen(!isOpen)}>
            <CgDetailsMore className="text-3xl text-white" />
          </div>
        )}
        <h2 className={`font-semibold ${offSet < 40 ? "hidden" : ""}`}>
          ST MATIA MULUMBA PARISH
        </h2>
      </div>
      <ul className=" text-sm md:flex hidden items-center gap-5 flex-wrap">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/about"}>
          <li>About</li>
        </Link>

        <Link href={"/events"}>
          <li>UpComing Events</li>
        </Link>
        <Link href={"/services"}>
          <li>Services</li>
        </Link>
        <Link href={"/sermon"}>
          <li>Sermons</li>
        </Link>
        <Link href={"contact"}>
          <li>Get Involved</li>
        </Link>
      </ul>
      {/* mobile view */}
      <ul
        className={`md:hidden block absolute top-[calc(100%+0vh)] z-[100] bg-[#0B1B2B] opacity-95 w-full leading-loose py-3 px-6 duration-500 ease-in-out ${
          isOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <Link href={"/"} onClick={() => setIsOpen(false)}>
          <li>Home</li>
        </Link>
        <Link href={"/about"} onClick={() => setIsOpen(false)}>
          <li>About</li>
        </Link>

        <Link href={"/events"} onClick={() => setIsOpen(false)}>
          <li>UpComing Events</li>
        </Link>
        <Link href={"/services"} onClick={() => setIsOpen(false)}>
          <li>Services</li>
        </Link>
        <Link href={"/sermon"} onClick={() => setIsOpen(false)}>
          <li>Sermons</li>
        </Link>
        <Link href={"contact"} onClick={() => setIsOpen(false)}>
          <li>Get Involved</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
