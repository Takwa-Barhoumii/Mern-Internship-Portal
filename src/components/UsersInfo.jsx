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
    <div>
      <h2>Users Info</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>School Name</th>
            <th>Skills</th>
            <th>Internship Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.schoolname}</td>
              <td>{user.skillsdev}</td>
              <td>{user.internshipty}</td>
              <td>
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
  );
}

export default UsersInfo;
