import React from "react";
import HeaderBanner from "../components/headerBanner/HeaderBanner";
import Image from "next/image";

function page() {
  return (
    <div>
      <HeaderBanner title={"Contact Us"} />
      <div className="px-5 py-14">
        <div className="grid grid-cols-fluid items-center leading-loose">
          <div>
            <h3 className="text-3xl font-semibold">CONTACT INFORMATION</h3>
            <p className="py-3">
              If you are ready to join our community, you can leave your
              contacts.
            </p>

            <div className="flex gap-5">
              <div>
                <p>ADDRESS:</p>
                <p>14960 Old Kampala</p>
                <p>Apple Valley, MN 55124</p>
              </div>
              <div>
                <p>SERVICE TIMES:</p>
                <p>Saturdays 4 pm</p>
                <p>Sundays 9 & 11 am</p>
              </div>
            </div>
          </div>
          <div className="min-h-[500px] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              // marginheight="0"
              // marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Kampala,%20Uganda&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              // style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
            ></iframe>
          </div>
        </div>

        <div className="pt-10">
          <div className="grid grid-cols-fluid gap-10">
            <div>
              <Image
                src="/assets/images/matia.jpg"
                alt="priest"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-center">
                ASK A QUESTION
              </h3>
              <p className="text-sm py-5">
                If you have any questions, you can contact us. Please, fill out
                the form below.
              </p>

              <div class="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
