import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, name, description, price } = service
    return (
        <>
            <div className='border-2 relative h-[550px] md:h-[500px] lg:h-[550px] '>
                <div className='flex relative'>
                    <div className='w-full h-full absolute '>
                        <span className='text-white font-bold text-lg z-20 bg-[#ff0000] p-2 m-5 inline-block'>$ {price}</span>
                    </div>
                    <img className='transform hover:scale-95' src={img} alt="" />
                </div>
                <h1 className='mt-4 font-bold text-center text-2xl text-[#ff5050]'> {name}</h1>
                <h1 className='mt-4 font-bold text-center text-xl text-white'>Price : ${price}</h1>
                <p className='mt-3 mb-3 font-normal text-center text-white'><small>{description}</small></p>
                <Link to='/checkout' className='text-xl font-bold bg-[#ff0000] absolute bottom-0 inline-block py-3 text-white w-full text-center hover:bg-[white] hover:text-black transition-all'>Order Now</Link>
            </div>
           
        </>
    );
};

export default ServiceCard;