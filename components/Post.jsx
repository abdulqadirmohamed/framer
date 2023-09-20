import React from "react";
import PostList from "./PostList";
import img1 from "../img/gallary_button.jpg";
import img2 from "../img/tags.jpg";

const Post = () => {
  const posts = [
    { id: 1, cover: img1, title: "How To Create A Galaxy Button in Framer", tags:['How-to', 'Hover'] },
    { id: 2, cover: img2, title: "How To Use HTML Tags in Framer", tags:['Optimization', 'SEO'] },
  ];
  return (
    <>
      <h1 className="text-2xl font-semibold pt-10">All posts</h1>
      <div className="grid md:grid-cols-2 gap-16">
        {posts.map((post) => (
          <PostList title={post.title} cover={post.cover} tag={post.tags} id={post.id}/>
        ))}
      </div>
    </>
  );
};

export default Post;
