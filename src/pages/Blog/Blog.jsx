import { useState } from 'react'
import { Layout } from "../../components";

const Blog = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [selectedValue, setSelectedValue] = useState('all');
  
  const handleSelect = e => {
  setSelectedValue(e.target.value)
  }
  
  const handleCategory = (cat) => {
  setCurrentCategory(cat)
  }
  
  return (
    <Layout>
        <div className='w-[90%] max-w-[1200px] mx-auto pt-5'>
          <div className='block my-2 bg-secondary w-16 h-1 mx-auto sm:mx-0'></div>
          <div className='flex flex-col sm:flex-row justify-between pb-1 md:pb-0'>
            <div className='text-dark font-semibold text-xl text-center md:text-left uppercase text-primary'>Blog Posts</div>
            <div className="hidden md:flex gap-[10px]">
              <button onClick={()=>handleCategory('all')} className={currentCategory==='all' ? "px-[10px] py-[2px] bg-[#CED4DC] rounded text-[13px]": "px-[10px] py-[2px] text-[13px]"}>All Posts</button>
              <button onClick={()=>handleCategory('general')} className={currentCategory==='general' ? "px-[10px] py-[2px] bg-[#CED4DC] rounded text-[13px]": "px-[10px] py-[2px] text-[13px]"}>General</button>
              <button onClick={()=>handleCategory('web')} className={currentCategory==='web' ? "px-[10px] py-[2px] bg-[#CED4DC] rounded text-[13px]": "px-[10px] py-[2px] text-[13px]"}>Web Design</button>
              <button onClick={()=>handleCategory('product')} className={currentCategory==='product' ? "px-[10px] py-[2px] bg-[#CED4DC] rounded text-[13px]": "px-[10px] py-[2px] text-[13px]"}>Product Design</button>
              <button onClick={()=>handleCategory('marketing')} className={currentCategory==='marketing' ? "px-[10px] py-[2px] bg-[#CED4DC] rounded text-[13px]": "px-[10px] py-[2px] text-[13px]"}>Digital Marketing</button>
            </div>
            <div className='flex justify-center items-center md:hidden text-sm font-medium mt-2 md:my-auto'>
              <label htmlFor='filter'>
                Filter by: 
              </label>
              <select id='filter' value={selectedValue} onChange={handleSelect} className='ml-[10px] bg-[#CED4DC] rounded p-2'>
                <option value="all">All Posts</option>
                <option value="general">General</option>
                <option value="web">Web Design</option>
                <option value="product">Product Design</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>
          </div>
          <div className='my-5 bg-primary w-full h-[1px]'></div>
          <div className="h-[calc(100vh_-_250px)] flex justify-center items-center">
            <div className="flex justify-center mx-2 text-gray-500">No blog post yet</div>
          </div>
        </div>
        <div className='hidden justify-center'>
          <button disabled={true} className='bg-primary text-light rounded-lg px-3 py-[14px] my-10 font-medium flex shrink-0 transition duration-200 active:scale-100 hover:scale-90'>Load More</button>
        </div>
    </Layout>
  );
};

export default Blog;
