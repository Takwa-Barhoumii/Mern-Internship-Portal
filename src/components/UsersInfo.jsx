import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersInfo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from backend
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handlePromoteToIntern = async (userId) => {
    try {
      await axios.put(`http://localhost:5000/api/users/${userId}`, { role: 'intern' });
      // Refresh user data after updating role
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.error('Error promoting user to intern:', error);
    }
  };

  return (


    <div className='max-w-[1000px] w-full mt-20  mx-auto text-center flex flex-col justify-center pb-14'>
        

<h2 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6'>Users Info</h2>

<div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Last Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">School Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Skills</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Internship Type</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {users.map(user => (
            <tr key={user._id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{user.firstName}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.lastName}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.schoolname}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.skillsdev}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.internshipty}</td>
              <td className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700" >
                {user.role === 'potentialIntern' && (
                  <button onClick={() => handlePromoteToIntern(user._id)}>
                    Promote to Intern
                  </button>
                )}
              </td>
            </tr>
          ))}
     
    </tbody>
  </table>
</div>

    </div>
  );
}

export default UsersInfo;
