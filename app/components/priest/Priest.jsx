import Image from "next/image";
import React from "react";

function Priest() {
  return (
    <div className="px-5 py-10">
      <div>
        <div className="text-center py-14">
          <p>SERVING OUR SAVIOR</p>
          <h3>Meet Our Fathers</h3>
        </div>
        <div className="grid grid-cols-fluid gap-3">
          {[1, 2, 3].map((i) => (
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
                  }}
                />
              </div>
              <div>
                <h4 className="py-2">Craig Groeschel</h4>
                <p className="font-semibold">FAther</p>
                <p className="leading-relaxed text-sm">
                  Following a vision God gave him and his wife Amy for a
                  different kind of church, he and a handful of people launched.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Priest;
