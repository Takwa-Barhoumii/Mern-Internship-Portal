import React from 'react'
import FAQ from './FAQ'

const Acco = () => {
  return (
    <div>
        <h3 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6'> FAQS GO HERE </h3>
    <div className='p-4 bg-black/5 rounded-lg px-6'>
      
        <FAQ title="How can I apply for an internship at Tunisair?" answer="To apply for an internship at Tunisair, please visit our careers page on the official website. You can find internship openings listed there along with detailed instructions on how to apply."/>
       
       
        <FAQ title="What are the eligibility criteria for internships at Tunisair?" 
        answer="Internship eligibility criteria may vary depending on the specific internship program. However, generally, candidates must be enrolled in an accredited educational institution and pursuing relevant coursework in fields related to aviation, engineering, finance, marketing, or other areas of interest to Tunisair."/>
        
        <FAQ title="Are Tunisair internships paid?"
         answer="Yes, Tunisair offers paid internship opportunities to selected candidates. The amount of stipend may vary depending on factors such as the duration of the internship, the level of education of the intern, and the specific internship program."/>
        
        <FAQ title="What is the duration of internships at Tunisair?" 
        answer=" The duration of internships at Tunisair can vary depending on the specific internship program and the needs of the company. Internship durations typically range from a few months to one year. Specific details regarding the duration will be provided in the internship job posting."/>

        <FAQ title="Will I have the opportunity for full-time employment after completing my internship at Tunisair?" 
        answer="While completion of an internship at Tunisair does not guarantee full-time employment, many interns have been offered permanent positions based on their performance, skills, and the availability of openings within the company. We value the contributions of our interns and strive to provide opportunities for career advancement whenever possible."/>
      
    </div>
    </div>
  )
}

export default Acco