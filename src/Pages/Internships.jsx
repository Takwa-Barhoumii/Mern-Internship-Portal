import React from 'react'

const Internships = ({result}) => {
  return (
    <>
    <div>
      <h3 className='text-lg font-bold mb-2'> {result.length} Internships </h3>
       </div>
       <section>  {result}    </section>
       </>
  );
};

export default Internships