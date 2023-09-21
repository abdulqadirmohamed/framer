"use client";
import { GrFormClose } from "react-icons/gr";
import { FiInfo } from "react-icons/fi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const router = useRouter()
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState();

  const handleClick = async (e)=>{
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:3000/api/blog', {
        method: 'POST',
        headers: {
          "content-type":"application/json"
        },
        body: JSON.stringify({ title, tags, description})
      })
      if(res.ok){
        router.push("/")
      }
    } catch (error) {
      
    }
  }
  return (
    <div className="bg-primary w-full min-h-screen">
      <div className="md:w-1/3 mx-auto text-white">
        <form className="grid pt-10">
          <div className="bg-gray rounded-sm px-3 py-2 text-textColor">
            <input
              type="file"
              placeholder="update"
            />
          </div>
          <div className="my-4">
            <h1 className="text-textColor">Title</h1>
            <input
              type="text"
              className="w-full bg-gray text-white p-2  outline-none rounded-sm my-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={tags}
              onChange={(e) => setTags(e.target.value)}
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
                Next Js
                <GrFormClose className="text-white" />
              </button>
            </div>
          </div>
          <div className="my-4">
            <span className="flex gap-1 items-center text-textColor">
              <h1>Description</h1>
              <FiInfo />
            </span>
            {/* <textarea
              type="text"
              className="w-full bg-gray p-2 text-white outline-none rounded-sm my-2"
            /> */}
            <ReactQuill
              theme="bubble"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              onClick={handleClick}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
