import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogDetail from "../sections/blog/BlogDetail";
import posts from '../sections/blog/data'

function BlogInner() {
  const { id } = useParams();
  
  return (
    <div className="mt-[102px] md:mt-[128px]">
      <BlogDetail dataId={id} />
    </div>
  );
}

export default BlogInner;
