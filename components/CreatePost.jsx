import React from "react";
import { GrFormClose } from "react-icons/gr";
import { FiInfo } from "react-icons/fi";

const CreatePost = () => {
    
  return (
    <div className="bg-primary w-full min-h-screen">
      <div className="md:w-1/3 mx-auto text-white">
        <div className="grid pt-10">
          <div className="bg-gray rounded-sm px-3 py-2 text-textColor">
            <input type="file" placeholder="update" />
          </div>
          <div className="my-4">
            <h1 className="text-textColor">Title</h1>
            <input
              type="text"
              className="w-full bg-gray text-white p-2  outline-none rounded-sm my-2"
            />
          </div>
          <div className="my-4">
            <span className="flex gap-1 items-center text-textColor">
              <h1>Tags</h1>
              <FiInfo />
            </span>
            <input
              type="text"
              className="w-full bg-gray p-2 text-white outline-none rounded-sm my-2"
            />
            <div className="grid grid-flow-col-dense auto-cols-max gap-2 text-sm">
              <button className="bg-gray text-textColor text-sm px-2 rounded-sm flex gap-2 items-center">
                How-to
                <GrFormClose />
              </button>
              <button className="bg-gray text-textColor px-2 text-sm rounded-sm flex gap-2 items-center">
                SEO
                <GrFormClose className="text-white" />
              </button>
              <button className="bg-gray text-textColor px-2 text-sm rounded-sm flex gap-2 items-center">
                SEO
                <GrFormClose className="text-white" />
              </button>
            </div>
          </div>
          <div className="my-4">
            <span className="flex gap-1 items-center text-textColor">
              <h1>Description</h1>
              <FiInfo />
            </span>
            <textarea
              type="text"
              className="w-full bg-gray p-2 text-white outline-none rounded-sm my-2"
            />
          </div>
          <div className="grid grid-flow-col gap-2">
            <button
              type="submit"
              className="border-2 border-gray rounded-sm px-3 py-2 text-textColor"
            >
              Draft
            </button>
            <button
              type="submit"
              className="bg-gray rounded-sm px-3 py-2 text-textColor"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
