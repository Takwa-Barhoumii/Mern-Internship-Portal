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
        <div>
            <h2>Incoming Requests</h2>
            <table>
                <thead>
                    <tr>
                        <th>Internship ID</th>
                        <th>Resume Link</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request, index) => (
                        <tr key={index}>
                            <td>{request.internshipId}</td>
                            <td><a href={request.resumeLink} target="_blank" rel="noopener noreferrer">View Resume</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default IncomingRequests;
