import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function TopBanner() {
  return (
    <div className="flex justify-between flex-wrap items-center min-h-[11vh] bg-[#25597B] text-white px-5 border-b-[1px] border-gray-400">
      <div className="flex gap-3 items-center flex-wrap">
        <FaFacebookF className="text-xl" />
        <FaInstagram className="text-xl" />
        <FaXTwitter className="text-xl" />
      </div>
      <div>
        <h1 className="font-semibold text-2xl">ST MATIA MULUMBA PARISH</h1>
      </div>
      <div>
        <Link href={"/give"}>
          <button className="p-2 bg-[#DCB074] rounded-xl text-sm">GIVE!</button>
        </Link>
      </div>
    </div>
  );
}

export default TopBanner;
