import React from 'react'
import InputField from '../components/InputField'

const InternshipPayement = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'> Payement Status </h4>

    <div>
        <label className='sidebar-label-container'> 
        <input type="radio" name= "test" id="test" value="" onChange={handleChange}/>
        <span className='checkmark'> </span> All
        </label>

        <InputField handleChange={handleChange} value="paid" title="Paid" name="test" />
        <InputField handleChange={handleChange} value="not paid" title="Not Paid" name="test" />
   
       
    </div>
    
    </div>
  )
}

export default InternshipPayement