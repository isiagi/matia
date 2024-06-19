import React from "react";
import HeaderBanner from "../components/headerBanner/HeaderBanner";
import Card from "../components/card/Card";
import { FaHandsPraying } from "react-icons/fa6";
import { FaBible } from "react-icons/fa";
import { FaPray } from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";

const data = [
  {
    id: 1,
    title: "Food Pantry and Meal Programs",
    desc: "We provide groceries, hot rests, or meal delivery services to individuals and families in need.",
  },
  {
    id: 2,
    title: "Emergency Assistance and Relief",
    desc: "This assistance can include temporary shelter, financial aid, clothing, and essential supplies.",
  },
  {
    id: 3,
    title: "Education and Training Programs",
    desc: "This can include adult literacy classes, job training, vocational workshops, and scholarships for higher education",
  },
  {
    id: 4,
    title: "Counseling and Support Services",
    desc: "These services may include counseling for individuals and families, support groups, addiction recovery programs, and crisis intervention.",
  },
];

const charity = [
  {
    id: 1,
    icon: <FaHandsPraying />,
    title: "Worship",
    desc: "Worship is a form of service that is offered to individuals and families in need. It can include prayer, offering, and prayerful service. Worship, offering, and prayerful service.",
  },
  {
    id: 2,
    icon: <FaBible />,
    title: "Religious Education",
    desc: "Religious Education is a form of service that is offered to individuals and families in need. It can include prayer, offering, and prayerful service.",
  },
  {
    id: 3,
    icon: <FaPray />,
    title: "Prayer",
    desc: "Prayer is a form of service that is offered to individuals and families in need. It can include prayer, offering, and prayerful service.",
  },
  {
    id: 4,
    icon: <MdOutlineSocialDistance />,
    title: "Social Services",
    desc: "Social Services is a form of service that is offered to individuals and families in need. It can include prayer, offering, and prayerful service.",
  },
];

function page() {
  return (
    <div className="">
      <HeaderBanner title={"Services"} />

      <div className="px-5">
        <div>
          <div className="text-center max-w-[550px] mx-auto leading-loose my-12">
            <h3>Our Services</h3>
            <h2 className="text-3xl py-4">
              Supporting Our Church’s Outreach Programs
            </h2>
            <p className="text-gray-400">
              From disaster response to ongoing aid, we stand by those facing
              adversity and offer a beacon of hope.
            </p>
          </div>
          <div className="grid grid-cols-fluid gap-3">
            {data.map(({ id, title, desc }) => (
              <Card
                key={id}
                title={title}
                desc={desc}
                imageUrl={"/assets/images/matia.jpg"}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-center max-w-[550px] mx-auto leading-loose my-20">
            <h3>OUR CHARITY SERVICES</h3>
            <h2 className="text-3xl py-4">
              Supporting Our Church’s Outreach Programs
            </h2>
            <p className="text-gray-400">
              From disaster response to ongoing aid, we stand by those facing
              adversity and offer a beacon of hope.
            </p>
          </div>
          <div className="grid grid-cols-fluid gap-3">
            {charity.map(({ id, icon, title, desc }) => (
              <div key={id} className="text-center flex flex-col">
                <h3 className="text-5xl mx-auto">{icon}</h3>
                <h3 className="font-semibold py-5 text-xl">{title}</h3>
                <h3>{desc}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
