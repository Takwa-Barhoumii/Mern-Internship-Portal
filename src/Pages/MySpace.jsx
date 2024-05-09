import React from 'react';
import MyNotes from '../components/MyNotes';
import UnderReview from '../components/UnderReview';
import Supervisor from './Supervisor';
import jwt from 'jsonwebtoken';



const MySpace = () => {
  const user = jwt.verify(localStorage.getItem("user"), "secretOrPrivateKey")  
  console.log(user)

  {/* const  = () => {
    switch (user.role) {
      case 'intern':
        return <MyNotes/>;
      case 'potentialIntern':
        return <UnderReview/>;
      case 'supervisor':
        return <Supervisor/>;
      default:
        return <div>No role defined or you're not authorized to view this content</div>;
    }
  }; */}

  return (
    <div>
      <h1>My Space</h1>
      
       
    </div>
  );
};

export default MySpace;