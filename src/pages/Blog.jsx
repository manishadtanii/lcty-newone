import React from "react";
import BlogGrid from "../sections/blog/BlogGrid";
import BlogHero from "../sections/blog/BlogHero";

function Blog() {
 

  return (
    <div className="overflow-x-hidden mt-[102px] md:mt-[128px]">
        <BlogHero />
     <BlogGrid />
    </div>
  );
}

export default Blog;
