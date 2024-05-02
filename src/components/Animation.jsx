import React from 'react';
import { ReactTyped, Typed } from "react-typed";

const Animation = () => {
  return (
    <div className='text-black'>
        <div className='max-w-[1000px] w-full mt-20  mx-auto text-center flex flex-col justify-center pb-14'>
            <p className='text-red font-extrabold p-2'> GROWING YOUR PROFESSIONAL CAREER </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6'> Grow with Tunisair </h1>
            <div className='flex justify-center items-center'>
              <p className='md:text-5xl sm:text-4xl text-xl font-bold'> Grow in your field: </p>
              <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold text-red md:pl-4 pl-2' 
              strings={[' Web Development', ' UX/UI' , ' Software Developement' ]} typeSpeed={40}  backSpeed={50} loop /> 
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-800 py-3'> Lorem, Eligendi non, architecto eveniet expedita quae quasi tempora.</p>
            <a href="http://localhost:5173/our-internships" target="_blank"> <button className='bg-red w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3 '>
               Get Started </button> </a>

        </div>
    </div>
  )
}

export default Animation