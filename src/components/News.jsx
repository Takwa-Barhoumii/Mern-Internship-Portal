import React from 'react'

const News = () => {
  return (
    <div className='w-full py-16 bg-black text-white px-4'>
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='m-auto lg:col-span-2'> 
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Want to get our latest internship opportunities? </h1>
            <p>Subscribe to our weekly Newsletter & stay up to date.</p>
        </div>
        <div className='my-4'>
            <div className=' flex flex-col sm:flex-row items-center justify-between w-full '>
            <input className= 'p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email'/>
            <button className='bg-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 text-black'> Notify Me </button>   
            </div>        
        <p> We care about your data. Read our <span className='text-[#e2001a]'> Privacy Policy. </span></p>
        </div>


    </div>

</div>
  )
}

export default News