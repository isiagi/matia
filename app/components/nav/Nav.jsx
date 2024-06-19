"use client";

import useOffset from "@/app/hooks/useOffset";
import Link from "next/link";
import React from "react";

function Nav() {
  const [offSet] = useOffset();
  return (
    <div
      className={`${
        offSet > 30 ? "fixed" : "relative"
      } z-10 w-full transition ease-in-out ${
        offSet > 30 ? "top-0" : ""
      } flex justify-center items-center bg-[#25597B] min-h-[9vh] text-white`}
    >
      <ul className=" text-sm flex items-center gap-5 flex-wrap">
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
    </div>
  );
}

export default Nav;
