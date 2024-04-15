import React from "react";

function Schedule() {
  return (
    <div>
      <div className="grid grid-cols-fluid">
        <div className="bg-[#A78A45] text-white py-16 px-5">
          <h3 className="text-2xl font-semibold">Mass Schedule</h3>
          <div className="border-2 w-14 my-3" />
          <ul>
            <li className="py-5">
              <span>
                <p>Sunday</p>
                <p>5:00 PM; 7:30 AM, 9:00 AM, 11:00 AM, 1:00 PM;</p>
              </span>
            </li>

            <li className="py-5">
              <span>
                <p>Monday-Friday</p>
                <p>6:30 AM to 9:00 AM;</p>
              </span>
            </li>
            <li className="py-5">
              <span>
                <p>Saturday</p>
                <p>9:00 AM to 11:30 AM.</p>
              </span>
            </li>
          </ul>
        </div>
        <div className="py-16 px-5">
          <h3 className="text-2xl font-semibold">Confession Times</h3>
          <div className="border-2 w-14 my-3" />
          <ul>
            <li className="py-5">
              <span>
                <p>Monday-Friday</p>
                <p>11:40 AM to 11:55 AM;</p>
              </span>
            </li>

            <li className="py-5">
              <span>
                <p>Thursday</p>
                <p>5:00 PM to 5:25 PM;</p>
              </span>
            </li>

            <li className="py-5">
              <span>
                <p>Saturday</p>
                <p>4:30 PM to 4:50 PM or by request.</p>
              </span>
            </li>
          </ul>
        </div>
        <div className="py-16 px-5">
          <h3 className="text-2xl font-semibold">Adoration Times</h3>
          <div className="border-2 w-14 my-3" />
          <ul>
            <li className="py-5">
              <span>
                <p>Wednesday</p>
                <p>8:15 AM to 9:30 AM;</p>
              </span>
            </li>

            <li className="py-5">
              <span>
                <p>Friday</p>
                <p>8:15 AM to 11:50 AM.</p>
              </span>
            </li>

            <li className="py-5">
              <span>
                <p>Saturday</p>
                <p>Reconciliation - 10:00 to 11:00 AM or by request.</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
