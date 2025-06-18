import React from "react";
import BlogCard from "../../components/BlogCard";

function BlogGrid() {
  const posts = [
    {
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      title: "Conversations with Our Favorite London Studio, Makr & Co.",
      description:
        "We sat down with London’s fast-growing brand and product design studio Makr & Co to find out how they’ve used Untitled UI to 2x their revenue.",
      tags: ["Design", "Research", "Interview"],
      image: "vol-form.jpg",
      delay: "100",
      blogId: "blog1",
    },
    {
      author: "Phoenix Rikker",
      date: "19 Jan 2024",
      title: "A Relentless Pursuit of Perfection in Product Design",
      description:
        "Began to notice that there was a sharp contrast between well-made, crafted products and poorly made ones...",
      tags: ["Product", "Research", "Frameworks"],
      image: "vol-form.jpg",
      delay: "200",
      blogId: "blog2",
    },
    {
      author: "Lana Steiner",
      date: "19 Jan 2024",
      title: "How to Run a Successful Business With Your Partner",
      description:
        "Starting a business with your spouse or significant other is an exciting but delicate process and requires a great deal of faith.",
      tags: ["Design", "Research"],
      image: "vol-form.jpg",
      delay: "300",
      blogId: "blog3",
    },
    {
      author: "Alec Whitten",
      date: "17 Jan 2024",
      title: "A Continually Unfolding History — Hillview by Made by Hand",
      description:
        "A single building occupies the hillside at Hillview, a historic 2400-hectare former sheep farm on Tasmania’s Bruny Island.",
      tags: ["Design", "Architecture"],
      image: "vol-form.jpg",
      delay: "400",
      blogId: "blog4",
    },
    {
      author: "Dewi Wilkinson",
      date: "16 Jan 2024",
      title: "Cognitive Dissonance Theory: Crash Course for UX Designers",
      description:
        "We all like to think of ourselves as rational beings. But our actions don’t always line up with what we believe.",
      tags: ["Product", "Research", "Frameworks"],
      image: "vol-form.jpg",
      delay: "500",
      blogId: "blog5",
    },
    {
      author: "Candice Wu",
      date: "15 Jan 2024",
      title: "How Remote Work Drastically Improved My Design Skills",
      description:
        "Remote working not only became feasible but beneficial. I became 15% more productive, with almost no difference in the effectiveness of my work.",
      tags: ["Design", "Research"],
      image: "vol-form.jpg",
      delay: "600",
      blogId: "blog6",
    },
    {
      author: "Natalie Craig",
      date: "14 Jan 2024",
      title: "Exclusive Interview with Designer, Jasmin Chew",
      description:
        "Jasmin Chew is a 29-year-old photographer and photo editor from Toronto. She shared a few of her design principles with us.",
      tags: ["Design", "Interview", "Research"],
      image: "vol-form.jpg",
      delay: "700",
      blogId: "blog7",
    },
    {
      author: "Drew Cano",
      date: "13 Jan 2024",
      title: "Improve Your UI Design Skills and Develop an 'Eye' for Design",
      description:
        "Design is constantly evolving. Learn how to develop your eye and improve your UI design skills in 2024.",
      tags: ["Design", "Tools", "Research"],
      image: "vol-form.jpg",
      delay: "800",
      blogId: "blog8",
    },
    {
      author: "Orlando Diggs",
      date: "12 Jan 2024",
      title: "The Design Dilemma: Is Best UX Practice the Enemy of Creativity?",
      description:
        "Francis Sullivan explores the design dilemma — what happens when best practice UX design clashes with creative freedom.",
      tags: ["Design", "Theory", "Research"],
      image: "vol-form.jpg",
      delay: "900",
      blogId: "blog9",
    },
    {
      author: "Chloe Chan",
      date: "11 Jan 2024",
      title: "The Rise of Minimalism in Web UI",
      description:
        "Minimalist design has taken center stage. But is less always more? Let's explore how it's shaping modern UIs.",
      tags: ["Design", "UI"],
      image: "vol-form.jpg",
      delay: "1000",
      blogId: "blog10",
    },
    {
      author: "Ravi Mehta",
      date: "10 Jan 2024",
      title: "Breaking Down Complex UX Concepts into Simple Frameworks",
      description:
        "Simplifying complexity is key in product design. Here’s how to break down UX theory into frameworks anyone can use.",
      tags: ["UX", "Frameworks", "Learning"],
      image: "vol-form.jpg",
      delay: "1100",
      blogId: "blog11",
    },
    {
      author: "Yara Zane",
      date: "09 Jan 2024",
      title: "From Chaos to Clarity: Organizing Your Design System",
      description:
        "A clear, documented design system can save hours. We walk you through how to organize yours.",
      tags: ["Design Systems", "Process"],
      image: "vol-form.jpg",
      delay: "1200",
      blogId: "blog12",
    },
    {
      author: "Leo Tran",
      date: "08 Jan 2024",
      title: "How We Created a Scalable Component Library",
      description:
        "Learn how our team built a reusable, scalable component library that works across platforms.",
      tags: ["Development", "Design Systems"],
      image: "vol-form.jpg",
      delay: "1300",
      blogId: "blog13",
    },
    {
      author: "Mina Wong",
      date: "07 Jan 2024",
      title: "The Psychology Behind Color Choices in Branding",
      description:
        "Colors impact user perception more than you think. Here's a look at color psychology in modern branding.",
      tags: ["Branding", "Psychology", "Design"],
      image: "vol-form.jpg",
      delay: "1400",
      blogId: "blog14",
    },
    {
      author: "Felix Rivera",
      date: "06 Jan 2024",
      title: "Accessibility is Not Optional: Building for Everyone",
      description:
        "Accessibility in design is a responsibility, not a bonus. Here's how to ensure inclusivity from day one.",
      tags: ["Accessibility", "Design", "Ethics"],
      image: "vol-form.jpg",
      delay: "1500",
      blogId: "blog15",
    },
  ];
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
