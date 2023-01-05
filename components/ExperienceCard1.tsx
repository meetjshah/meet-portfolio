import React from 'react'
import { motion } from 'framer-motion';
// import { Experience } from '../typings';
// import { urlFor } from '../sanity';

type Props = {
  // experience: Experience;
}
// experience
function ExperienceCard1({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
      <motion.img 
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity:1, y: 0 }}
      viewport={{ once: true }}
      className='w-32 h-32 rounded-full xs:w-[15px] xs:h-[15px] xl:w-[200px] xl:h-[200px] object-cover object-center'
      // {urlFor(experience?.companyImage).url()}
      src="Waaree.jpg"
      alt=""
      />

      <div className='px-0 md:px-10'>
        <h4 className='md:text-4xl text2xl font-light'>
          Software Engineer Intern
          {/* {experience.jobTitle} */}
        </h4>
        <p className='font-bold md:text-2xl text-xl mt-1'>
          {/* {experience.company} */}
          Waaree Energies Ltd.
          </p>
        <div className='flex space-x-2 my-2'>
            <img
              className='h-10 w-10 rounded-full'
              src="React.svg"
              alt=''
            />
            <img
              className='h-10 w-10 rounded-full'
              src="node.png"
              alt=''
            />
            <img
              className='h-10 w-10 rounded-full'
              src="MongoDB.jpg"
              alt=''
            />
            <img
              className='h-10 w-10 rounded-full'
              src="ExpressJS.png"
              alt=''
            />
          {/* {experience.technologies.map((technology) => (
              <img
              key={technology._id}
              className='h-10 w-10 rounded-full'
              src={urlFor(technology?.image).url()}
              alt=''
            />
          ))} */}
          {/* Tech used */}
        </div>

        <p className='uppercase py-5 text-gray-300'>
          11/02/2020 - 03/28/2021
          {/* {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" 
          : new Date(experience.dateEnded).toDateString()} */}
        </p>

        <ul className='list-disc space-y-4 ml-5 md:text-lg text-sm'>
          {/* {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))} */}
          <li>Engineered a full stack website that provided centralized access by housing and compiling data into single branch database improving speed of query search by 30%.</li>
          <li>Developed a client-setup system from scratch, reducing manual efforts by 20%.</li>
          <li>Incorporated feedback mechanism using service rating portal which reduced customer grievance rate by 40%.</li>
          <li>Improved the visual layout using HTML5/CSS, Bootstrap and Material UI which resulted in rise in client interest and interaction on website by 40-50%.</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard1