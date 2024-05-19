import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const InternshipDetails = () => {
    const { id } = useParams();
    const [internship, setInternship] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/all-internships/${id}`)
            .then(res => res.json())
            .then(data => setInternship(data))
    }, [id])

    const handleApply = async () => {
        const { value: formValues } = await Swal.fire({
            title: 'Apply for Internship',
            html:
                '<input id="name" class="swal2-input" placeholder="Name">' +
                '<input id="email" type="email" class="swal2-input" placeholder="Email">' +
                '<input id="resumeLink" class="swal2-input" placeholder="Resume Link">',
            focusConfirm: false,
            preConfirm: () => {
                return {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    resumeLink: document.getElementById('resumeLink').value,
                    internshipId: id
                }
            }
        });

        if (formValues) {
            const response = await fetch('http://localhost:5000/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });
            if (response.ok) {
                Swal.fire('Success!', 'Your application has been submitted.', 'success');
            } else {
                Swal.fire('Error!', 'Failed to submit application.', 'error');
            }
        }
    }

    return (



        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
           <h1 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6'> Internship Details </h1>

            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Title</dt>
      <dd className="text-gray-700 sm:col-span-2">{internship.internshipTitle}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Agence</dt>
      <dd className="text-gray-700 sm:col-span-2">{internship.companyName}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Payement </dt>
      <dd className="text-gray-700 sm:col-span-2">{internship.payment}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Location</dt>
      <dd className="text-gray-700 sm:col-span-2">{internship.internshipLocation}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Posting Date </dt>
      <dd className="text-gray-700 sm:col-span-2">{internship.postingDate}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Employement Type</dt>
      <dd className="text-gray-700 sm:col-span-2">{internship.employmentType}</dd>
    </div>

            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
        <dt className="font-medium text-gray-900">Skills Required</dt>
        <dd className="text-gray-700 sm:col-span-2">
            {internship.skills && internship.skills.length > 0 ? (
            internship.skills.map((skill, index) => (
                <span key={index} className="mr-2">{skill.label}</span>
            ))
            ) : (
            <span>No skills required</span>
            )}
        </dd>
        </div>



    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Desription</dt>
      <dd className="text-gray-700 sm:col-span-2">
      {internship.description}
      </dd>
    </div>
  </dl>
</div>

        <a className=" my-6 group relative inline-block focus:outline-none focus:ring" onClick={handleApply}>
        <span
            className="absolute inset-0 translate-x-0 translate-y-0 bg-red/50 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
        ></span>

        <span
            className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
        >
            Apply 
        </span>
        </a>
          

        </div>
    )
}

export default InternshipDetails;
