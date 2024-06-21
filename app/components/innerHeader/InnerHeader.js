import React from "react";

function InnerHeader({ title }) {
  return (
    <div className="text-center max-w-[550px] mx-auto leading-loose my-12">
      <h3>{title}</h3>
      <h2 className="text-3xl py-4">
        Supporting Our Church’s Outreach Programs
      </h2>
      <p className="text-gray-400">
        From disaster response to ongoing aid, we stand by those facing
        adversity and offer a beacon of hope.
      </p>
    </div>
  );
}

export default InnerHeader;
