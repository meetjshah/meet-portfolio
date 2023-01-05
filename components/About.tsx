import React from 'react';
import { motion } from 'framer-motion';
// import { PageInfo } from '../typings';
// import { urlFor } from '../sanity';

type Props = {};
// type Props = {
//     pageInfo: PageInfo;
// }
// {pageInfo}: Props
function About({} : Props) { 
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>

        <motion.img 
        initial={{
            x: -200,
            opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            // {urlFor(pageInfo?.profilePic).url()}
            whileInView={{ opacity:1, x: 0 }}
            viewport={{ once: true }}
            src="Meet_photo_.jpg"
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a{' '}
                <span className='underline decoration-[#F7AB0A]/50'>little</span>{' '} 
                background
            </h4>
            <p className='text-base'>
            {`I'm Meet Shah, currently studying Masters in Computer Science at Indiana University - Bloomington. 
            I have completed three internships as a Software Engineer where I've worked with both startups and large corporations to help build and scale their companies. 
            I've been passionate about development from ever since I first got exposure to it's resources. 
            Along the journey I witnessed my passion for development increasing exponetially, as I never got bored or tired even if it meant sitting for several hours to get job done. 
            I'm grateful for the opportunities I've got and can't wait to explore what opportunities future awaits.`}
            {/* {pageInfo.backgroundInformation} */}
            </p>
        </div>
    
    </motion.div>
  )
}

export default About