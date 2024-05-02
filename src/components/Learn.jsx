import React from 'react'
import Team from "../assets/teams.jpg"

const Learn = () => {
  return (
    <div className='w-full bg-white py-16 px-4 '>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] shadow-lg mx-auto my-4' src= {Team} />
            <div className='flex flex-col justify-center'> 
              <p className='text-[#e2001a] font-bold'> Write some text here </p>
              <h1 className='md:text-4xl sm:text-2xl font-bold py-2'> Productive Atmosphere </h1>
              <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea velit aperiam veniam 
                ut, ex repellat ipsam quos explicabo eaque doloremque animi quas odit distinctio 
                tempore? Ut assumenda corporis natus.</p>
                <a href='http://localhost:5173/about' target="_blank"><button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'> 
                Get Started </button> </a>

            </div>

        </div>
    
    
    </div>
  )
}

export default Learn