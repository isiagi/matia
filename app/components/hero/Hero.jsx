import React from "react";

function Hero() {
  return (
    <div className="min-h-[80vh] overflow-hidden relative">
      <div className="w-full h-full absolute animate-[zoom_80s_infinite] bg-[url('/assets/images/matia.jpg')] bg-center bg-cover bg-no-repeat bg-black bg-blend-overlay bg-opacity-[0.3]"></div>
      <div className="h-full w-full absolute top-0 z-50 flex items-center justify-center">
        <h2 className="text-4xl  font-bold text-white">
          WELCOME TO ST MATIA MULUMBA PARISH
        </h2>
      </div>
    </div>
  );
}

export default Hero;
