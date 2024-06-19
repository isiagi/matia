import React from "react";

function Footer() {
  return (
    <div className="px-5 bg-[#222222] text-white mt-11">
      <div>
        <h1 className="text-center text-3xl font-semibold py-10 ">
          ST MATIA MULUMBA PARISH
        </h1>
        <div className="flex justify-between text-sm flex-wrap">
          <div className="leading-loose">
            <h1 className="font-semibold">Pages</h1>
            <ul className="leading-loose">
              <li>About Us</li>
              <li>Our Pastors</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="leading-loose">
            <h1 className="font-semibold">Our Services</h1>
            <ul className="leading-loose">
              <li>Sermons</li>
              <li>Ministries</li>
              <li>Upcoming Events</li>
              <li>Donations</li>
            </ul>
          </div>

          <div className="leading-loose">
            <h1 className="font-semibold">Contact</h1>
            <ul className="leading-loose">
              <li>(001) 321-123-4567</li>
              <li>example@email.com</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-center py-10 text-sm">
            &copy; 2024 - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// const footerData = [
//   {
//     id: 1,
//     title: "Pages",
//     link,
//   },
// ];
