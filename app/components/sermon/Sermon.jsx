import React from "react";

function Sermon() {
  return (
    <div className="px-5 py-16 bg-[#F7F5EE]">
      <div
        className="min-h-[83vh] bg-[url('/assets/images/matia1.jpg')] bg-center bg-cover bg-no-repeat bg-black bg-blend-overlay bg-opacity-[0.5]
    flex items-center px-5 text-white"
      >
        <div>
          <p>LATEST SERMON</p>

          <h3 className="text-4xl font-semibold max-w-[400px] py-7">
            Finding the Kingdom and Living by the Kings Wisdom
          </h3>

          <div className="flex gap-5">
            <button className="bg-[#DCB074] p-3 text-gray-800">
              Watch Sermon
            </button>
            <button className="bg-[#fff] p-3 text-gray-800">All Sermons</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sermon;
