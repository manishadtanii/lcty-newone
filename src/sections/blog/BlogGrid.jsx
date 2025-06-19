import React from "react";
import BlogCard from "../../components/BlogCard";
import posts from "./data.js"; // Assuming you have a blogPosts.js file with your blog posts 

function BlogGrid() {
  
  return (
    <div>
      <div className="blog-grid">
        <div className="container-xxl">
          {/* Blog Grid */}
          <main className=" px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}

export default BlogGrid;
