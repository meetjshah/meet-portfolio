import React from 'react'
import { motion } from 'framer-motion';
// import { Experience } from '../typings';
// import { urlFor } from '../sanity';

type Props = {
  // experience: Experience;
}
// experience
function ExperienceCard2({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-x-scroll scrollbar-thin
    scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 md:overflow-hidden '>
      <motion.img 
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity:1, y: 0 }}
      viewport={{ once: true }}
      className='w-32 h-32 rounded-full xs:w-[15px] xs:h-[15px] xl:w-[200px] xl:h-[200px] object-cover object-center'
      // {urlFor(experience?.companyImage).url()}
      src="IUB.png"
      alt=""
      />

      <div className='px-0 md:px-10'>
        <h4 className='md:text-4xl text2xl font-light'>
          Graduate Teaching Assistant
          {/* {experience.jobTitle} */}
        </h4>
        <p className='font-bold md:text-2xl text-xl mt-1'>
          {/* {experience.company} */}
          Indiana University Bloomington
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
              src="PostgreSQL.jpg"
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
          01/09/2022 - 05/30/2022
          {/* {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" 
          : new Date(experience.dateEnded).toDateString()} */}
        </p>

        <ul className='list-disc space-y-4 ml-5 md:text-lg text-sm'>
          {/* {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))} */}
          <li>Served as a graduate teaching assistant for the course Software Engineering-I and helped students build websites with complex functionalities like Chatbot, Maps, Voice Recognition.</li>
          <li>Assisted professor in articulating course structure into multiple stages which refined clarity of project requirements by 30%.</li>
          <li>Mentored students in planning various stages of project which reduced product delivery time by 15%.</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard2