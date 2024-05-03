import React from 'react'
import Quest from "../assets/Q.png"

const KeyFigures = () => {
  return (
    <div className='w-full bg-white py-16 px-4 '>

    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        
        <div className='flex flex-col justify-center'> 
          
          <h1 className='md:text-4xl sm:text-2xl font-bold py-2'> TUNISAIR EN CHIFFRES </h1>
          <p className=''> TUNISAIR vous emmène vers plus de 30 destinations</p>
            

        </div>
        
        <div>
        <img className='w-[500px] mx-auto my-4' src= {Quest} />
        </div>

    </div>


</div>
  )
}

export default KeyFigures