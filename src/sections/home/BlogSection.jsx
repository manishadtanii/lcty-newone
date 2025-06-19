import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { Link } from "react-router-dom";
import Heading from "../../components/Heading";

function BlogSection() {
  const blogs = [
    {
      title: "Play with your child",
      subtitle: "using simple words",
      author: "Nisha",
      date: "14 March, 2025",
      image: "blog-1.jpg", // Replace with your image
      description:
        "Helping your child find their voice starts with love and everyday moments. Say simple words while you play, read together, or talk about what you see on a walk. Connection creates confidence and that's where growth begins.",
    },
    {
      title: "Difficulties in feeding children",
      subtitle: "with special needs",
      author: "Nisha",
      date: "15 March, 2025",
      image: "blog-2.png", // Replace with your image
      description:
        "Every word is a step toward healing. In celebration of Speech Therapy Month, we're sharing simple, meaningful ways to support articulation goals at home—through play, connection, and love. Let's continue to nurture every child's voice, one joyful moment at a time.",
    },
  ];
  const data = {
    title: [
      { text: "A ", class: "font-calvino" },
      { text: "little more about", class: "font-calvino-italic" },
      { text: "our thoughts!", class: "font-calvino" },
    ],
    textAlign: "text-center md:text-start",
    spacing: "p-4",
    fontSize: "h3",
  };
  return (
    <section className="relative" style={{ background: "linear-gradient(360deg, rgba(200, 182, 255, 0.4) 0%, rgba(255, 150, 255, 0) 100%)" }}>
      <div className="container-fixed">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[40%] sticky top-0" >
            <Heading data={data} />
          </div>

          <div className="lg:w-[60%]" data-aos="fade-up" data-aos-delay="300">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="">
                {blogs.map((blog, index) => (
                  <div
                    key={index}
                    className="grid md:grid-cols-2 primary-bg-2 text-white overflow-hidden shadow-lg mt-4"
                  >
                    <div className="p-5 pb-0 md:pb-5 md:pe-0">
                      <img
                        src={blog.image}
                        alt="Blog"
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="h4  mb-2">
                          <span className="font-calvino">{blog.title} </span>
                          <span className="font-calvino-italic">
                            {blog.subtitle}
                          </span>
                        </h2>
                        <div className=" font-archivo border-y border-white mt-2 pt-2 pb-2 mb-4 flex flex-col sm:flex-row sm:justify-between text-sm sm:text-base gap-1">
                          <span>{blog.author}</span>
                          <span>{blog.date}</span>
                        </div>
                        <p className="font-archivo btn-t mb-4 text-white">
                          {blog.description}
                        </p>
                      </div>
                      <a
                        href="#"
                        className=" text-white font-calvino-italic flex items-center gap-1 mt-auto "
                      >
                        Read more <i class="fal fa-arrow-right -rotate-45"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-end justify-center ">
                <Link to="/blog">
                  <div className="w-14 h-14 secondary-bg-1 flex items-center justify-center rounded-full text-white body-t hover:bg-[#fab4fa] transition-all">
                    <i class="fal fa-arrow-up rotate-45 "></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
