import React from 'react'
import UnderReview from '../components/UnderReview';
import MyNotes from '../components/MyNotes';
import Supervisor from './Supervisor';

const MySpace = () => {
  const role = localStorage.getItem('role');

  return (
   role=="potentialIntern" ?<UnderReview/>:role=="intern" ?<MyNotes/>:<Supervisor/>
  )
}

export default MySpace