import React from 'react'
import InputField from '../components/InputField'

const InternshipEmployementType = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'> Emloyement Type </h4>

    <div>
        <label className='sidebar-label-container'> 
        <input type="radio" name= "test" id="test" value="" onChange={handleChange}/>
        <span className='checkmark'> </span> All
        </label>

        <InputField handleChange={handleChange} value="on site" title="On Site" name="test" />
        <InputField handleChange={handleChange} value="hybrid" title="Hybrid" name="test" />
        <InputField handleChange={handleChange} value="remote" title="Remote" name="test" />
        
    </div>
    
    </div>

  )
}

export default InternshipEmployementType