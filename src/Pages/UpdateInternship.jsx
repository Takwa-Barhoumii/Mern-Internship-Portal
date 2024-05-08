import { useLoaderData, useParams } from 'react-router-dom'
import React,{ useState } from 'react'
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const UpdateInternship = () => {

    const {id} = useParams();
    //console.log(id);
    const {_id, internshipTitle, companyName, payment, internshipLocation, employmentType, description,
         postingDate, postedBy, skills} = useLoaderData()

         const [selectedOption, setSelectedOption] = useState(null);

  const {
  register,
  handleSubmit, reset,

  formState: { errors },
} = useForm()

const onSubmit = (data) => {  
  data.skills = selectedOption;
  
 // console.log(data); 

 fetch(`http://localhost:5000/update-internship/${id}`, {
  method: "PATCH",
  headers: { 'content-type':'application/json'},
  body: JSON.stringify(data)
 } )
 .then( (res) => res.json())
 .then((result) => {
  console.log(result);
  if (result.acknowledged === true) {
    alert ("Internship Updated Succesfully!")
  }
  reset();

 });

};

  const options =[
   {value: "Javascript", label: "JavaScript"}, 
   {value: "C++", label: "C++"}, 
   {value: "HTML", label: "HTML"}, 
   {value: "ReactJS", label: "ReactJS"},
   {value: "PHP", label: "PHP"},
   {value: "MondoDB", label: "MondoDB"},
   {value: "Node", label: "Node"}, 
   
  
  ]




  return (
    
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      
      <div className='bg-[#FAFAFA] py-10px-4 lg:px-16'>


      <form onSubmit={handleSubmit(onSubmit)}>

        {/* 1st row  */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'> Internship Title  </label>
            <input type="text" defaultValue={internshipTitle} 
            {...register("internshipTitle")} className='create-internship-input' />

          </div>

          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'> Company Name </label>
            <input type="text" defaultValue={companyName}  
            {...register("companyName")} className='create-internship-input' />

          </div>

        </div>      


        {/* 2nd row  */}

        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'> Paymenet </label>
            <select {...register("payment")} className='create-internship-input'> 
              <option value={payment}>{payment}</option>
              <option value="Paid">Paid</option>
              <option value="Not Paid">Not Paid</option>
              
            </select>


          </div>

          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'> Internship Location </label>
            <input type="text" defaultValue={internshipLocation} 
            {...register("internshipLocation")} className='create-internship-input' />

          </div>

        </div> 

        
        {/* 3rd row  */}

        <div className='create-internship-flex'>
        <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'> Internship Posting Date </label>
            <input type="date" defaultValue={postingDate} 
            {...register("postingDate")} className='create-internship-input' />

          </div>
          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'> Employement Type </label>
            <select {...register("employmentType")} className='create-internship-input'> 
              <option value={employmentType}>{employmentType}</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="On site">On site</option>
              
            </select>


          </div>

          

        </div> 

        {/* 4th row  */}

        <div>
        <label className='block mb-2 text-lg'> Required Skill Sets </label>
        <CreatableSelect
        defaultValue={skills}
        onChange={setSelectedOption}
        options={options}
        isMulti
        className='create-internship-input py-4'/>


        </div>

         {/* 5th row  */}

        <div className='w-full'>
        <label className='block mb-2 text-lg'> Description </label>
        <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700' 
        rows={6}
        defaultValue={description}
        {...register("description")}/>
        </div>

         {/* last row  */}

         <div className='w-full'>
         <label className='block mb-2 text-lg'> Submitted by </label>

         <input type="email" defaultValue={postedBy} 
            {...register("postedBy")} className='create-internship-input' />
         </div>



      <input type="submit" value="Submit" className='block mt-12 bg-red text-white font-semibold px-8 py-2 rounded-sm cursor-pointer '/>
    </form>

      </div>
      
      </div>
  )
}

export default UpdateInternship