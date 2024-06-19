import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

function page() {
  return (
    <div>
      <div className="mx-5 md:mt-16 mt-0">
        <div className="py-5 leading-loose">
          <Link href={"/events"} className="w-fit">
            <span className="flex  items-center">
              <MdOutlineKeyboardDoubleArrowLeft className="text-xl" />
              <h3>All Events</h3>
            </span>
          </Link>
          <p className="border-b-[1px] border-gray-400 py-3 text-gray-400">
            This is a pasted event
          </p>
        </div>
        <div className="pb-5 leading-loose">
          <h3 className="font-bold text-xl py-4">Children Support</h3>
          <p>May 10, 2018 @ 10:30 am - May 20, 2022 @ 5:00 pm</p>
        </div>
        <div className="pb-7">
          <div>
            <Image
              src={"/assets/images/matia.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            {/* <h2 className="font-semibold text-center text-xl py-5">
              Children Support
            </h2> */}
            <p className="text-sm leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              reprehenderit aspernatur culpa perspiciatis eveniet quos excepturi
              eligendi a, ex eaque temporibus consectetur velit id maiores
              cupiditate eos recusandae laborum repellendus? Magnam est aut ipsa
              expedita, dolorum quam alias beatae quisquam animi veritatis,
              asperiores autem adipisci tempora porro, minus sint doloribus ea
              voluptatem. Illo delectus fugit unde, ab exercitationem fugiat
              sint.
            </p>
          </div>
        </div>
        <div className="text-sm">
          <h3 className="font-semibold text-lg">Details</h3>
          <div className="flex gap-10">
            <div>
              <div className="my-2 leading-relaxed">
                <p className="font-semibold">Start:</p>
                <p className="border-dotted border-gray-400 border-b-[1px] w-fit">
                  April 9, 2019 @ 8:00 am
                </p>
              </div>
              <div className="mb-2 leading-relaxed">
                <p className="font-semibold">End:</p>
                <p className="border-dotted border-gray-400 border-b-[1px] w-fit">
                  April 9, 2019 @ 8:00 am
                </p>
              </div>
            </div>
            <div className="text-sm">
              <h3 className="font-semibold text-lg">Organizer</h3>
              <p>Craig Groeschel</p>
              <p>FAther</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
