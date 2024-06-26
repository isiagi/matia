import Link from "next/link";
import React from "react";

function HeaderBanner({ title }) {
  return (
    <div
      className="min-h-[40vh] bg-[url('/assets/images/matia.jpg')] bg-center bg-cover bg-no-repeat bg-black bg-blend-overlay bg-opacity-[0.3]
  flex items-center bg-fixed"
    >
      <div className="text-white mx-5 leading-loose">
        <h2 className="text-3xl font-medium">{title}</h2>
        <p>
          <Link href={"/"}>Home</Link> &gt; {title}{" "}
        </p>
      </div>
    </div>
  );
}

export default HeaderBanner;
