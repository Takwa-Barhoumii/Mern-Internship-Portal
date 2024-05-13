import React, { useEffect, useState } from 'react';

const IncomingRequests = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/requests')
            .then(res => res.json())
            .then(data => setRequests(data))
            .catch(error => console.error('Error fetching requests:', error));
    }, []);

    return (
        <div className='max-w-[1000px] w-full mt-20  mx-auto text-center flex flex-col justify-center pb-14'>
            <h2 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6'>Incoming Requests</h2>
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Internship ID</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Resume Link</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {requests.map((request, index) => (
                        <tr key={index}>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 ">{request.internshipId}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-blue-500 underline underline-offset-2 under"><a href={request.resumeLink} target="_blank" rel="noopener noreferrer">View Resume</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default IncomingRequests;
