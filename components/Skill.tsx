import React from 'react'
import { motion } from 'framer-motion';
// import { Skill } from '../typings';
// import { url } from 'inspector';
// import { urlFor } from '../sanity';

type Props = {
    // skill: Skill;
    titlesrc?: string;
    proficiency?: string;
    directionLeft?: boolean;
}

const Skill = ({ titlesrc, proficiency, directionLeft }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        {/* <motion.img
            initial={{    
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(skill?.image).url()}
            className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-24 md:h-24 xl:w-24 xl:h-24 
            filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24
        w-24 md:w-24 md:h-24 xl:w-24 xl:h-24 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div> */}

        <motion.img
            initial={{    
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={titlesrc}
            className='rounded-full border border-gray-500 object-cover w-12 h-12 md:w-24 md:h-24 
            filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12
        w-12 md:w-24 md:h-24 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-md md:text-3xl font-bold text-black opacity-100'>{proficiency}%</p>
            </div>
        </div>

    </div>
  )
}

export default Skill