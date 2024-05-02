import React from 'react'
import InputField from '../components/InputField'

const Location = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'> Location </h4>

    <div>
        <label className='sidebar-label-container'> 
        <input type="radio" name= "test" id="test" value="" onChange={handleChange}/>
        <span className='checkmark'> </span> All
        </label>

        <InputField handleChange={handleChange} value="tunis" title="Tunis" name="test" />
        <InputField handleChange={handleChange} value="sousse" title="Sousse" name="test" />
        <InputField handleChange={handleChange} value="nabeul" title="Nabeul" name="test" />
        <InputField handleChange={handleChange} value="bizerte" title="Bizerte" name="test" />
        <InputField handleChange={handleChange} value="monastir" title="Monastir" name="test" />
    </div>
    
    </div>


  
  );
};

export default Location