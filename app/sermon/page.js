"use client";

import React, { useState } from "react";
import HeaderBanner from "../components/headerBanner/HeaderBanner";
import { FaVideo } from "react-icons/fa";
import { AiFillAudio } from "react-icons/ai";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import ReactAudioPlayer from "react-audio-player";
import InnerHeader from "../components/innerHeader/InnerHeader";

function Page() {
  const [isOpen, setOpen] = useState(false);
  const [isAudio, setAudio] = useState(false);
  return (
    <div className="relative">
      <HeaderBanner title={"Sermons"} />
      <InnerHeader title={"SERMONS"} />
      <div className="px-5">
        <div className="grid grid-cols-fluid gap-3 py-10">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="relative">
                <div>
                  <Image
                    src="/assets/images/matia.jpg"
                    alt="sermon"
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
                <div className="flex gap-3 justify-end absolute -bottom-5 right-7">
                  <div className="flex gap-3">
                    <div
                      onClick={() => setAudio(true)}
                      className="p-2 bg-[#DCB074] rounded-full text-white"
                    >
                      <AiFillAudio className="text-2xl" />
                    </div>
                    <div
                      onClick={() => setOpen(true)}
                      className="p-2 bg-[#DCB074] rounded-full text-white"
                    >
                      <FaVideo className="text-2xl" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-7 leading-loose">
                <p className="text-gray-400">February 16, 2023</p>
                <h3 className="text-xl font-semibold">
                  Jesus came to bring Joy
                </h3>
              </div>
            </div>
          ))}
        </div>
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
        <div
          className={`${
            isAudio
              ? "fixed inset-0 z-10 flex top-0 bottom-0 left-0 right-0 opacity-90 items-center justify-center w-[100%] overflow-hidden bg-black"
              : "hidden"
          }`}
        >
          <div className="flex flex-col">
            <h3
              className="text-3xl font-medium text-white justify-end self-end "
              onClick={() => setAudio(false)}
            >
              x
            </h3>
            <ReactAudioPlayer
              src="my_audio_file.ogg"
              autoPlay
              controls
              className="z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
