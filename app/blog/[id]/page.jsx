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
        <div className="flex gap-2 mt-10 text-sm">
          <span className="bg-lightBlue px-2 rounded-sm ">How-to</span>
          <span className="bg-lightBlue px-2 rounded-sm ">SEO</span>
        </div>
        <div>
          <h1 className="text-5xl my-3 font-bold leading-[50px]">
            How To Create Gradient Borders in Framer
          </h1>
          <p className="text-[18px] text-textColor leading-[32.3px] my-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            ipsam sit beatae magnam ratione earum eos repellat consequatur
            voluptas. Neque voluptate obcaecati ab ipsam unde minima cumque.
          </p>
          <p className="text-[18px] text-textColor leading-[32.3px] my-4">
            molestias sed corrupti odit a laudantium dolor laborum esse
            blanditiis facere iste! Sapiente laboriosam incidunt nesciunt labore
            itaque blanditiis nobis, voluptatem inventore aspernatur quam
            molestiae tempora nihil quo maxime reiciendis. Placeat nisi optio
            natus cum. Repellat sed dolor delectus at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
