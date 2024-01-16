// Testimonials.js
import { useState } from 'react';
import Slider from 'react-slick';
import TestimonialItem from './TestimonialItem';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [testimonialsData] = useState([
        {
            text: 'I attended the 4-days Microsoft office workshop, and I must say - It was fantastic, exciting, and educative. I am excited and lucky to have attended the workshop. It was a program one can\'t afford to miss.',
            name: 'Ganiyu Sofiat'
        },
        {
            text: 'Real and Interesting! Not like those who only say what they can\'t do. I look forward to an impactful week with Ridot Software Academy.',
            name: 'Funmilola Aremu'
        },
        {
            text: 'Thank you so much Ridot Software Academy for this great opportunity you\'re giving females, this is a once in a time privilege and thanks to our great tutors',
            name: 'Enitan Badmus'
        },
        {
            text: 'Thanks for sharing your knowledge with us, before this class started, I was a novice, but now… when giving thanks, I can\'t forget our great tutors.',
            name: '-------'
        },
        {
            text: 'My sales within this short period with Ridot Software Academy has been high. I had new customers and the potential ones are making enquiries ',
            name: 'Precious Adenopo'
        },
        {
            text: 'The training was fantastic, educative, and challenging. Thanks for the innovation to involve women in tech. More grease to your elbows.',
            name: 'Mrs. Joseph'
        },
    ]);

    // Settings for the slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        centerMode: true,
        focusOnSelect: true,
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 889,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
        ]
    };

    return (
        <div className="testimonial-carousel block max-w-[1200px] mx-auto pt-10 md:pt-20 pb-12 md:pb-40 overflow-x-hidden h-full">
            <div className="mx-auto w-16 h-1 bg-secondary mb-5"></div>
            <h1 className="mb-10 text-center mx-4 text-2xl sm:text-3xl font-bold font-Montserrat text-primary">
                Testimonials
            </h1>
            <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="p-2">
                        <TestimonialItem
                            testimonial={testimonial.text}
                            name={testimonial.name}
                            isActive={index === currentSlide} 
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;

