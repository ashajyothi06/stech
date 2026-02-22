import React from "react";

const blogData = [
  {
    id: 1,
    title: "A Comprehensive Guide to Mobile Wireframing: Everything You Need to Know",
    description:
      "Mobile wireframing is a critical part of the app design process, laying the groundwork for creating a seamless user experience. In this guide, we'll walk you through what wireframing is, the tools you'll need, common mistakes to avoid, and much more. Whether you're a...",
    image: "https://sklassicstech.com/wp-content/uploads/2024/11/web-development-services-400x250.jpg",
    date: "Dec 15, 2024",
    category: "Data Analysis",
    author: "Sklassics Tech",
  },
  {
    id: 2,
    title: "What is Exploratory Data Analysis?",
    description:
      "Exploratory Data Analysis (EDA) is like exploring a new place. Just as you walk around, notice things, and try to understand your surroundings, EDA helps you explore a dataset. You look at the data, check its different parts, and try tounderstand what it tells you....",
    image: "https://sklassicstech.com/wp-content/uploads/2024/11/Website-Maintenance-Support-400x250.jpg",
    date: "Dec 14, 2024",
    category: "Data Analysis",
    author: "Sklassics Tech",
  },
];

const Blog = () => {
  return (
    <section className="px-4 sm:px-10 lg:px-32 py-8 sm:py-12 bg-white mt-16">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#a12d23] mb-8 sm:mb-10 text-center">Our Blog</h1>
      <div className="flex flex-col gap-16">
        {blogData.map((blog) => (
          <div key={blog.id} className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-none text-left">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[220px] sm:h-[320px] object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 leading-tight">{blog.title}</h2>
            <div className="text-sm text-gray-500 mb-4">
              by {blog.author} | {blog.date} | {blog.category}
            </div>
            <p className="text-base text-gray-700 mb-2">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;