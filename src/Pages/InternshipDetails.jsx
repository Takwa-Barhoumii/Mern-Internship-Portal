import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const InternshipDetails = () => {
    const { id } = useParams();
    const [internship, setInternship] = useState({})
    
    useEffect(() => {
        fetch(`http://localhost:5000/all-internships/${id}`)
            .then(res => res.json())
            .then(data => setInternship(data))
    }, [id])

    const handleApply = async () => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "Resume Link",
            inputPlaceholder: "Enter the URL of your resume"
        });
        if (url) {
            // Send resume link and internship ID to backend
            const response = await fetch('http://localhost:5000/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ resumeLink: url, internshipId: id }),
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
            <h2>Internship Details: {id}</h2>
            <h1>{internship.internshipTitle}</h1>
            <button className='bg-red px-8 py-2 text-white' onClick={handleApply}>Apply Now</button>
        </div>
    )
}

export default InternshipDetails
