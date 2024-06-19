import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="mx-5">
      <div className="flex flex-wrap items-center border border-gray-400 p-2 md:mt-10 mt-5">
        <input type="text" className=" flex-1 p-2 outline-none" />
        <button className="bg-blue-500 p-2 outline-none border-none  text-white">
          Find Event
        </button>
      </div>
      <div className="py-5 text-center bg-gray-400 my-5 text-sm">
        <h3>Upcoming Events</h3>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mt-10">Lastest Past Events</h3>
        <div className="grid gap-7">
          {[1, 2, 3, 4].map((_, i) => (
            <Link key={i} href={"/events/detail"}>
              <div className="flex justify-between items-center text-sm flex-wrap-reverse">
                <div>
                  <p>June</p>
                  <h3 className="font-semibold text-lg py-1">18</h3>
                  <p>2024</p>
                </div>
                <div className="max-w-[500px]">
                  <p>May 10, 2018 @ 10:30 am - May 20, 2022 @ 5:00 pm</p>
                  <h3 className="text-xl font-semibold py-2">
                    Children Support
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis egestas rhoncus. Donec facilisis fermentum
                    sem.
                  </p>
                </div>
                <div>
                  <Image
                    src={"/assets/images/matia.jpg"}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
