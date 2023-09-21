import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const PostList = ({ title, cover, tags, id }) => {
  return (
    <Link href={`blog/${id}`} className="mt-10 cursor-pointer group">
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-[-50px] m-3 flex group-hover:top-0 z-50 ">
          {tags.map((tag) => (
            <span className="bg-lightBlue px-2 rounded-sm mx-1">{tag}</span>
          ))}
        </div>
        <Image
          src={cover}
          alt="image"
          className="rounded-md border-[1px] border-gray group-hover:opacity-80"
        />
      </div>
      <div className="flex justify-between items-center gap-4 mt-4">
        <h1 className="text-[22px]">{title}</h1>
        <span className="bg-gray p-[1px] rounded-sm">
          <BsArrowRightShort
            size={30}
            className="group-hover:pl-1 transition duration-300 ease-in"
          />
        </span>
      </div>
    </Link>
  );
};

export default PostList;
