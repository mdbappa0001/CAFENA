import React from 'react';
import banner from "../../images/banner/banner.jpeg";

const Banner = () => {
    return (
        <div class="carousel w-full lg:h-screen">
        <div id="slide1" class="carousel-item relative w-full">
        <div className='w-full h-full bg-gray-700 top-0 left-0 absolute opacity-10'></div>
        <div className='w-full h-full flex flex-col absolute top-0 left-0  items-center justify-center'>
            <div className='text-xl pl-4 md:text-4xl lg:text-5xl font-bold text-white'>Top Coffee Company in the World</div>
            <div className='py-5 text-white pl-6'>We Need Help on Tools Importing from Us? Furniture Mart Recommend You The Best Furniture and Tools Shippipment</div>
            <a href="#contact">
            <button className='btn bg-lime-500 text-black hover:bg-lime-700 hover:text-white'>Get Started Your Business With Us</button>
            </a>
        </div>
            <img src={banner} class="w-full" alt='' />
        </div>
    </div>
    );
};

export default Banner;