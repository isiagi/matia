import React from "react";
import HeaderBanner from "../components/headerBanner/HeaderBanner";
import Image from "next/image";

function page() {
  return (
    <div>
      <HeaderBanner title={"Give"} />
      <div className="py-14 mx-5">
        <div className="grid grid-cols-fluid gap-5">
          {[1, 2, 3].map((_, i) => (
            <div key={i}>
              <div>
                <Image
                  src="/assets/images/matia.jpg"
                  alt="priest"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="leading-loose">
                <h2 className="text-xl font-semibold py-2">Complex Build</h2>
                <p className="text-sm leading-relaxed pb-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Assumenda asperiores iure sequi dolores cum excepturi culpa,
                  magnam quod a. Inventore, placeat beatae.
                </p>
              </div>
              <div>
                <button className="bg-blue-500 w-full p-2 text-white rounded-lg hover:bg-blue-400">
                  Give
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
