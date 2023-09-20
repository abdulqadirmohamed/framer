import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const page = () => {
  return (
    <div className="bg-primary w-full min-h-screen">
      <div className="md:w-1/3 mx-auto text-white">
        <div className="flex items-center gap-2 text-sm pt-10">
          <Link href="/" className="hover:text-textColor">
            Blog
          </Link>
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
          <h5 className="text-textColor">
            How To Create A Galaxy Button in Framer
          </h5>
        </div>
        <div className="flex gap-2 mt-10">
          <span className="bg-lightBlue px-2 rounded-sm ">How-to</span>
          <span className="bg-lightBlue px-2 rounded-sm ">SEO</span>
        </div>
        
      </div>
    </div>
  );
};

export default page;
