import React from "react";
import { Layout } from "../../components";
import BlogCard from "./BlogCard";
import { blogPosts } from "./blogs";

const Blog = () => {
  const [currentCategory, setCurrentCategory] = React.useState("all");
  const [selectedValue, setSelectedValue] = React.useState("all");

  const handleCategory = (category) => {
    setCurrentCategory(category);
  };

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
  };

  const filteredPosts = blogPosts.filter(
    (post) => currentCategory === "all" || post.category === currentCategory
  );

  return (
    <Layout>
      <div className="w-[90%] max-w-[1200px] mx-auto pt-5">
        <div className="block my-2 bg-secondary w-16 h-1 mx-auto sm:mx-0"></div>
        <div className="flex flex-col sm:flex-row justify-between pb-1 md:pb-0">
          <div className="text-dark font-semibold text-xl text-center md:text-left uppercase text-primary">
            Blog Posts
          </div>
          <div className="hidden md:flex gap-[10px]">
            <button
              onClick={() => handleCategory("all")}
              className={
                currentCategory === "all"
                  ? "px-[10px] py-[2px] bg-[#CED4DC] rounded text-[13px]"
                  : "px-[10px] py-[2px] text-[13px]"
              }
            >
              All Posts
            </button>
            <button
              onClick={() => handleCategory("general")}
              className={
                currentCategory === "general"
                  ? "px-[10px] py-[2px] bg-[#CED4DC] rounded text-[13px]"
                  : "px-[10px] py-[2px] text-[13px]"
              }
            >
              General
            </button>
            <button
              onClick={() => handleCategory("engineering")}
              className={
                currentCategory === "engineering"
                  ? "px-[10px] py-[2px] bg-[#CED4DC] rounded text-[13px]"
                  : "px-[10px] py-[2px] text-[13px]"
              }
            >
              Engineering
            </button>
            <button
              onClick={() => handleCategory("data")}
              className={
                currentCategory === "data"
                  ? "px-[10px] py-[2px] bg-[#CED4DC] rounded text-[13px]"
                  : "px-[10px] py-[2px] text-[13px]"
              }
            >
              Data
            </button>
            <button
              onClick={() => handleCategory("product")}
              className={
                currentCategory === "product"
                  ? "px-[10px] py-[2px] bg-[#CED4DC] rounded text-[13px]"
                  : "px-[10px] py-[2px] text-[13px]"
              }
            >
              Product
            </button>
          </div>
          <div className="flex justify-center items-center md:hidden text-sm font-medium mt-2 md:my-auto">
            <label htmlFor="filter">Filter by:</label>
            <select
              id="filter"
              value={selectedValue}
              onChange={handleSelect}
              className="ml-[10px] bg-[#CED4DC] rounded p-2"
            >
              <option value="all">All Posts</option>
              <option value="general">General</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="product">Product</option>
            </select>
          </div>
        </div>
        <div className="my-5 bg-primary w-full h-[1px]"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <BlogCard
                key={index}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                link={post.link}
              />
            ))
          ) : (
            <div className="col-span-1 sm:col-span-2 md:col-span-3 h-[calc(100vh_-_250px)] flex justify-center items-center">
              <div className="flex justify-center mx-2 text-gray-500">
                No blog post yet
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="hidden justify-center">
        <button
          disabled={true}
          className="bg-primary text-light rounded-lg px-3 py-[14px] my-10 font-medium flex shrink-0 transition duration-200 active:scale-100 hover:scale-90"
        >
          Load More
        </button>
      </div>
    </Layout>
  );
};

export default Blog;
