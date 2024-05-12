import React from 'react'
import {Link} from 'react-router-dom';
import {FiCalendar, FiClock, FiDollarSign, FiMapPin} from 'react-icons/fi';

const Card = ({data}) => {
  const {_id, companyName, internshipTitle, companyLogo, payment, internshipLocation, employmentType, postingDate, description} = data;
  return (
    
      <section className='card'>
      <Link to= {`/internship/${_id}`} className = "flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt="" />
        <div>
          <h4 className='text-primary mb-1'> {companyName} </h4>
          <h3 className='text-lg font-semibold mb-2'> {internshipTitle} </h3>
          <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
            <span className='flex items-center gap-1'> <FiMapPin/> {internshipLocation} </span>
            <span className='flex items-center gap-1'> <FiDollarSign/> {payment} </span>
            <span className='flex items-center gap-1'> <FiClock/> {employmentType} </span>
            <span className='flex items-center gap-1'> <FiCalendar/> {postingDate} </span>
          </div>

          <p className='text-base text-primary/70'> {description} </p>


        </div>


      </Link>

      </section>
    
  )
}

export default Card