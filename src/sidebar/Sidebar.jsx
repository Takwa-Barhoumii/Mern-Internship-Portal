import React from 'react'
import Location from './Location'
import InternshipPostingDate from '../components/InternshipPostingDate'
import InternshipPayement from '../components/InternshipPayement'
import InternshipEmployementType from '../components/InternshipEmployementType'

const Sidebar = ({handleChange}) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'> </h3>

        <Location handleChange= {handleChange} />
        <InternshipPostingDate handleChange= {handleChange} />
        <InternshipPayement handleChange= {handleChange} />
        <InternshipEmployementType handleChange= {handleChange} />

    </div>
  )
}

export default Sidebar