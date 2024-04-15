import React from "react";

function Nav() {
  return (
    <div className="flex justify-center items-center bg-[#25597B] min-h-[9vh] text-white">
      <ul className="flex items-center gap-5 flex-wrap">
        <li>Home</li>
        <li>About</li>
        <li>Get Involved</li>
        <li>UpComing Events</li>
        <li>Services</li>
        <li>News</li>
      </ul>
    </div>
  );
}

export default Nav;
