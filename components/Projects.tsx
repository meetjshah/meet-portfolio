import React from 'react'
import { motion } from 'framer-motion';
// import { Project } from '../typings';
// import { urlFor } from '../sanity';

type Props = {
    // projects: Project[];
}
// projects
const Projects = ({}: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly
    mx-auto items-center z-0'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
            {/* pt-[40px] */}
            {/* {projects?.map((project, i) => (
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen'>
                    <motion.img
                    initial={{ y: -300, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity:1, y: 0 }}
                    viewport={{ once: true }}
                    src={urlFor(project?.image).url()}
                    className='h-[400px]'
                    alt=''
                    />

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center xs:text-2xl s:text-2xl md:text-3xl'>
                            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {projects.length}:</span>{" "}
                            {project?.title}
                        </h4>

                        <div className='flex items-center space-x-2 justify-center'>
                            {project?.technologies.map(technology => (
                                <img key={technology._id}
                                    className='h-10 w-10'
                                    src={urlFor(technology.image).url()}
                                    alt=""
                                />
                            ))}
                        </div>

                        <p className='text-lg text-center md:text-left'>
                           {project?.summary}
                        </p>
                    </div>
                </div>
            ))} */}

                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen'>
                    <motion.img
                    initial={{ y: -300, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity:1, y: 0 }}
                    viewport={{ once: true }}
                    src="CNS_Spoke_Bric.jpg"
                    className='h-[200px] md:h-[400px]'
                    alt=''
                    />

                    <div className='space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-lg md:text-3xl font-semibold text-center xs:text-2xl s:text-2xl'>
                            <span className='decoration-[#F7AB0A]/50'>Case Study 1 of 2:</span>{" "}
                            Biomedical Visualization Project
                        </h4>

                        <div className='flex items-center space-x-2 justify-center'>
                            <img
                                className='h-10 w-10'
                                src="Angular.png"
                                alt=""
                            />
                            <img
                                className='h-10 w-10'
                                src="typescript.png"
                                alt=""
                            />
                            <img
                                className='h-10 w-10'
                                src="PostgreSQL.jpg"
                                alt=""
                            />
                            <img
                                className='h-10 w-10'
                                src="Jasmine.png"
                                alt=""
                            />
                        </div>

                        <p className='text-base md:text-lg text-center md:text-left'>
                        This project is a biomedical visualization project which has dashboard panels for showing statistical graph analysis 
                        of research papers for biomedical researchers in an efficient way which highlights important parts of research using predefined keywords.
                        </p>
                    </div>
                </div>

                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen'>
                    <motion.img
                    initial={{ y: -300, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity:1, y: 0 }}
                    viewport={{ once: true }}
                    src="Speedy-Rent(Screenshot).png"
                    className='h-[200px] md:h-[400px]'
                    alt=''
                    />

                    <div className='space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-lg md:text-3xl font-semibold text-center xs:text-2xl s:text-2xl'>
                            <span className='decoration-[#F7AB0A]/50'>Case Study 2 of 2:</span>{" "}
                            Speedy Rent
                        </h4>

                        <div className='flex items-center space-x-2 justify-center'>
                            <img
                                className='h-10 w-10'
                                src="React.svg"
                                alt=""
                            />
                            <img
                                className='h-10 w-10'
                                src="MongoDB.jpg"
                                alt=""
                            />
                            <img
                                className='h-10 w-10'
                                src="node.png"
                                alt=""
                            />
                            <img
                                className='h-10 w-10'
                                src="ExpressJS.png"
                                alt=""
                            />
                            <img
                                className='h-10 w-10'
                                src="javascript.png"
                                alt=""
                            />
                        </div>

                        <p className='text-base md:text-lg text-center md:text-left'>
                        This website stores and displays information about products rented and available for rent with Map location. 
                        It also has features like Voice Recognition, ChatBot, Chat, Messaging, Search and Filter Recommendation.
                        </p>
                    </div>
                </div>

        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects