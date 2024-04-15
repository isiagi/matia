import React from "react";

function Verse() {
  return (
    <div
      className="min-h-[90vh] bg-[url('/assets/images/matia1.jpg')] bg-center bg-cover bg-no-repeat bg-black bg-blend-overlay bg-opacity-[0.6]
    flex items-center justify-center px-5 text-white"
    >
      <div className="text-center">
        <p>VERSE OF THE DAY</p>
        <h3 className="max-w-[700px] font-semibold text-3xl py-6">
          For I know the plans I have for you, declares the Lord, plans for
          welfare and not for evil, to give you a future and a hope.
        </h3>

        <p>Jeremiah 29:11</p>
      </div>
    </div>
  );
}

export default Verse;
