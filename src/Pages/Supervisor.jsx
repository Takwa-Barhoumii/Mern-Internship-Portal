import React from 'react'

const Supervisor = () => {
  return (
    <div>
        {/* first section */}
        <div className='text-black'>
            <div className='max-w-[1000px] w-full mt-20  mx-auto text-center flex flex-col justify-center pb-14'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6'> Create Internships </h1>
                
                <a href="http://localhost:5173/create-internship" target="_blank"> <button className='bg-red w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3 '>
                Get Started </button> </a>

            </div>
        </div>

        {/* 2nd section */}
        <div className='text-black'>
            <div className='max-w-[1000px] w-full mt-20  mx-auto text-center flex flex-col justify-center pb-14'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6'> My Internships </h1>
                
                <a href="http://localhost:5173/my-internships" target="_blank"> <button className='bg-red w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3 '>
                Get Started </button> </a>

            </div>
        </div>

        {/* 3rd section */}
        <div className='text-black'>
            <div className='max-w-[1000px] w-full mt-20  mx-auto text-center flex flex-col justify-center pb-14'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6'> USERS INFO </h1>
                
                <a href="users-info" target="_blank"> <button className='bg-red w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3 '>
                Get Started </button> </a>

            </div>
        </div>

         {/* 3rd section */}
         <div className='text-black'>
            <div className='max-w-[1000px] w-full mt-20  mx-auto text-center flex flex-col justify-center pb-14'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6'> Incoming requests </h1>
                
                <a href="incoming-requests" target="_blank"> <button className='bg-red w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3 '>
                Get Started </button> </a>

            </div>
        </div>



    </div>
  )
}

export default Supervisor