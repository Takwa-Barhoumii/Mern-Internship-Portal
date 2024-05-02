import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Internships from './Internships';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../components/Newsletter';



const OurInternships = () => {  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const  [internships, setInternships] = useState ([]);
  const [isLoading, setIsloading] = useState(true); 
  const [currentPage, setCurrentPage] = useState (1);
  const itemsPerPage = 6; 

  useEffect (() => {
    setIsloading(true); 
    fetch("internships.json").then(res => res.json()).then(data => {
      
      setInternships(data)
      setIsloading(false); 
    })


  },[] )


//handle input change

  const [query,setQuery] =useState ("");
  const handleInputChange = (event) =>{
    setQuery(event.target.value)
}
//filter internships by title


const filteredItems = internships.filter((internship) => internship.internshipTitle.toLowerCase().indexOf(query.toLowerCase()) 
!== -1 );

//--------------- Radio filtering ---------------
const handleChange = () =>
{
  setSelectedCategory(event.target.value)

}


//calculate index range

const calculatePageRange =() => {
  const startIndex = (currentPage - 1 ) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return {startIndex, endIndex };
  }

// function for the next page
const nextPage =() => {
if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {

  setCurrentPage(currentPage + 1);
  }

}

//function for the previous page

const prevPage = () => {
if (currentPage > 1) {
  setCurrentPage(currentPage - 1 )
}
}

//main function
const filteredData = (internships, selected, query) =>
{
  let filteredInternships = internships;

  // Filtering input items

  if (query) {
    filteredInternships = filteredItems;
  }

  // Category filtering

  if(selected) {
    filteredInternships =  filteredInternships.filter(({internshipLocation, payment, postingDate, employmentType }) =>
    
      internshipLocation.toLowerCase() === selected.toLowerCase() ||
      employmentType.toLowerCase() === selected.toLowerCase() ||
      postingDate >= selected ||
      payment.toLowerCase()  === selected.toLowerCase() 
      
    );
    console.log(filteredInternships);
    }

    //slice data based on current page 
    const {startIndex, endIndex } = calculatePageRange();
    filteredInternships = filteredInternships.slice ( startIndex, endIndex);

    return filteredInternships.map((data, i) => <Card key={i} data = {data} /> )
}

const result = filteredData(internships, selectedCategory, query);


  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>   

      {/* main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px4 py-12 '>

        {/* left side */}
        <div className='bg-white p-4 rounded'> <Sidebar handleChange={handleChange}/>
        </div>

        {/* internships cards */}
        <div className='col-span-2 bg-white p-4 rounded-sm'>
          { 
          isLoading ? (<p className='font-medium'> Loading ...  </p>) : result.length > 0 ? <Internships result={result} /> : 

          <> 
          <h3 className='text-lg font-bold mb-2'> {result.length} Internships </h3>
          <p>  No data Found! </p>
          </>

          }


          {/* Pagination Here */ }

          {
            result.length > 0 ? (

              <div className='flex justify-center mt-4 space-x-8'> 
              <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'> Previous </button>
              <span className='mx-2 '> Page {currentPage} of {Math.ceil(filteredItems.length /  itemsPerPage)} </span>
              <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / 
              itemsPerPage)} className='hover:underline'> Next </button>
              
              </div>

              
            ): ""
          }


          </div>


        {/* right side */}
        <div className='bg-white p-4 rounded'> <Newsletter/> </div>
        
      </div>

    </div>

  )
}

export default OurInternships