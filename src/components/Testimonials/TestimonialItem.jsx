// TestimonialItem.js
const TestimonialItem = ({ testimonial, name, isActive }) => {
    const activeClass = "scale-100 bg-primary text-white h-[380px]";
    const normalClass = "scale-90 bg-white h-[350px]";

    return (
        <div className={`p-10 cursor-grab transition-transform duration-300 shadow-lg rounded-lg overflow-hidden mb-4 border ${isActive ? activeClass : normalClass}`}>
            <p className={`${isActive? 'text-white': 'text-gray-600'} text-lg`}>{testimonial}</p>
            <p className={`${isActive? 'text-white' : 'text-gray-800'} text-xl font-bold mt-4`}>- {name}</p>
        </div>
    );
};

export default TestimonialItem