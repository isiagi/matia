"use client";

import React from "react";
import HeaderBanner from "../components/headerBanner/HeaderBanner";
import Image from "next/image";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import InnerHeader from "../components/innerHeader/InnerHeader";

function Page() {
  const config = {
    public_key: process.env.NEXT_PUBLIC_WAVE_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: "UGX",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "ST MATIA MULUMBA PARISH",
      description: "Church Donations",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div>
      <HeaderBanner title={"Give"} />
      <InnerHeader title={"DONATIONS"} />
      <div className="py-14 mx-5">
        <div className="grid grid-cols-fluid gap-5">
          {[
            { id: 1, buttonName: "Donate" },
            { id: 2, buttonName: "Give" },
            { id: 2, buttonName: "Offer" },
          ].map(({ id, buttonName }) => (
            <div key={id}>
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
                <button
                  onClick={() => {
                    handleFlutterPayment({
                      callback: (response) => {
                        console.log(response);
                        closePaymentModal(); // this will close the modal programmatically
                      },
                      onClose: () => {},
                    });
                  }}
                  className="bg-blue-500 w-full p-2 text-white rounded-lg hover:bg-blue-400"
                >
                  {buttonName}
                </button>
                {/* <FlutterWaveButton {...getFwConfig(id, buttonName)} /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
