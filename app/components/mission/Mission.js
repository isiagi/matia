import React from "react";
import { TbBible } from "react-icons/tb";

function Mission() {
  return (
    <div>
      <div className="text-center md:py-36 py-20">
        <TbBible className="mx-auto text-6xl" />
        <p className="text-2xl py-5">PARISH MISSION STATEMENT</p>

        <div className="max-w-[500px] mx-auto leading-loose">
          <p>
            The love of Christ impels us to welcome all, to worship joyfully and
            pray fervently, to walk together with those in need, and to
            reverence God in the wonder of Creation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
