import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const MyInternships = () => {
  const [internships, setInternships] = useState ([]);
  const [searchText, setSearchText] = useState ("");
  const [isLoading, setIsLoading] = useState(true);

  //set current page
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 4; 
  
  useEffect (() => {
    setIsLoading(true);
    fetch (`http://localhost:5000/my-internships/barhoumii.takwa@gmail.com`)
    .then(res => res.json())
    .then(data => {
        setInternships(data);
        setIsLoading(false);


    });


  }, [searchText]); 

  //pagination
  const indexOfLastItem = currentPage * itemsPerPage; 
  const indexOfFirstItem = indexOfLastItem -itemsPerPage; 
  const currentInternships = internships.slice( indexOfFirstItem, indexOfLastItem)

  //next btn & previous btn
  const nextPage =() => {
    if (indexOfLastItem < internships.length) {
      setCurrentPage (currentPage + 1)
    }
  }
  const prevPage =() => {
    if (indexOfLastItem > 1) {
      setCurrentPage (currentPage - 1)
    }
  }

  const handleSearch = () => {
      const filter = internships.filter((internship) => internship.internshipTitle.toLowerCase().indexOf(searchText.toLowerCase()) 
      !== -1 );
      //console.log(filter);
      setInternships(filter);
      setIsLoading(false);
  }

  const handleDelete = (id) => {
    //console.log(id)
    fetch (`http://localhost:5000/internship/${id}`, {
      method: "DELETE"
    })
    .then((res) =>res.json)
    .then((data) => {
      if (data.acknowledged === true) {
        alert ("Internship Deleted Succesfully!");
      }
       
    });
  };

  //console.log(searchText);
  return <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
     <div>
        <h1 className='text-center p-4'>
          All my internships
        </h1>
        <div className='p-2 text-center mb-2'>
          <input 
          onChange={(e) => setSearchText(e.target.value)}
          
          type="text" name="search" id="search" className='py-2 pl-3 border focus:outline-none lg:w-6/12
          mb-4 w-full'/>
          <button className='bg-red text-white font-semibold px-8 py-2 rounded-sm mb-4' onClick={handleSearch}> Search </button>
        </div>

      </div> 
      {/* table */}

      <section className="py-1 bg-blueGray-50">
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">All internships</h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">

        <Link to="/create-internship"> <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase 
          px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all 
          duration-150" type="button">Post new internship</button> </Link>

        </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          NO
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Job Title
                        </th>
           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          EMPLOYEMENT TYPE
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          EDIT
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          DELETE
                        </th>
          </tr>
        </thead>

        {
          isLoading ? (<div className='flex iterms-center justify-center h-20'> <p> Loading..... </p></div> ) 
          : (<tbody>
            {
               currentInternships.map((internship, index) => (
    
                <tr key={index}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                  {index+1}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  {internship.internshipTitle}
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {internship.employmentType}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <button> <Link to ={`/edit-internship/${internship?._id}`} > Edit </Link> </button>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <button onClick={( ) => handleDelete(internship._id) } className='bg-red py-2 px-6 text-white rounded-sm'> Delete </button>
                </td>
              </tr>
    
               ))
            }
    
              
             
            </tbody> )
        }

        

      </table>
    </div>
  </div>
</div>
{/* pagination */ }
<div className='flex justify-center text-black  space-x-8 mb-8'>
  {
    currentPage > 1 && (
      <button className='hover-underline' onClick={prevPage}> Previous </button>
    )
  }
  {
    indexOfLastItem < internships.length && (
      <button className='hover-underline'onClick={nextPage}> Next </button>
    )
  }

</div>

</section>

     </div>; 
  
};

export default MyInternships