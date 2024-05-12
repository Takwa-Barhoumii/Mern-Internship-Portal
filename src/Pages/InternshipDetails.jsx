import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const InternshipDetails = () => {
        const {id} = useParams();
        const [internship, setInternship] = useState ([])
        useEffect ( () => {

            fetch (`http://localhost:5000/all-internships/${id}`).then(res =>res.json()).then(data => setInternship(data))
        }, [] )


        const handleApply = async () => {
            const { value: file } = await Swal.fire({
              title: "Select Resume",
              input: "file",
              inputAttributes: {
                "accept": "application/pdf",
                "aria-label": "Upload your Resume"
              }
            });
            if (file) {
              const reader = new FileReader();
              reader.onload = () => {
                const pdfData = new Uint8Array(reader.result);
                const pdfUrl = URL.createObjectURL(
                  new Blob([pdfData], { type: "application/pdf" })
                );
                Swal.fire({
                  title: "Your PDF",
                  html: `<iframe width="100%" height="500px" src="${pdfUrl}" frameborder="0"></iframe>`
                });
              };
              reader.readAsArrayBuffer(file);
            }
          };
          


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>

        <h2> Internship Details: {id}  </h2>
        <h1> {internship.internshipTitle} </h1>
        <button className='bg-red px-8 py-2 text-white' onClick={handleApply}> Apply Now </button>

    </div>
  )
}

export default InternshipDetails