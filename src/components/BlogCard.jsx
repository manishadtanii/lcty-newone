import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden border" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={post.delay}>
      <Link to={`/blog/${post.blogId}`}>
      <img src={`/${post.image}`} alt={post.title} className="w-full h-56 object-cover" />
      <div className="p-5">
        <p className="text-sm text-gray-500 mb-2 font-archivo">{post.author} — {post.date}</p>
        <h3 className="text-lg font-semibold mb-2 font-calvino">{post.title}</h3>
        <p className="text-sm text-gray-600 mb-4 font-archivo">{post.description}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className=" text-sm p-2 border border-black rounded-full text-gray-700 font-archivo "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BlogCard;
