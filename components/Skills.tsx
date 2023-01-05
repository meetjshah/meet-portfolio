import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';
// import { isExpressionStatement } from 'typescript';
// import { Skill as SkillType } from '../typings';


type Props = {
  // skills: SkillType[];
}
// skills
function Skills({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] 
    xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
        </h3> 

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
          Hover over a skill for current proficiency
        </h3>

        <div className='grid grid-cols-4 gap-5 pt-48'>

          <Skill titlesrc="ExpressJS.png" proficiency='80' />
          <Skill titlesrc="Angular.png" proficiency='90'/>
          <Skill titlesrc="css.png" proficiency='95'/>
          <Skill titlesrc="html.png" proficiency='95'/>
          <Skill titlesrc="Jasmine.png" proficiency='70'/>
          <Skill titlesrc="MongoDB.jpg" proficiency='85'/>
          <Skill titlesrc="node.png" proficiency='80'/>
          <Skill titlesrc="React.svg" proficiency='90'/>
          <Skill titlesrc="PostgreSQL.jpg" proficiency='80'/>
          <Skill titlesrc="sass.png" proficiency='90'/>
          <Skill titlesrc="typescript.png" proficiency='85'/>
          <Skill titlesrc="MySQL.png" proficiency='80'/>
          <Skill titlesrc="git.png" proficiency='90'/>
          <Skill titlesrc="javascript.png" proficiency='85'/>
          <Skill titlesrc="python.png" proficiency='95'/>
          <Skill titlesrc="Bootstrap.png" proficiency='85'/>
          <Skill titlesrc="tailwind.jpg" proficiency='80'/>
          <Skill titlesrc="Firebase.png" proficiency='90'/>
          <Skill titlesrc="VSCode.png" proficiency='90'/>
          <Skill titlesrc="redux.png" proficiency='80'/>


          {/* {skills?.slice(0, skills.length / 2).map(skill => (
            <Skill key={skill._id} skill={skill} />
          ))}
          
          {skills?.slice(skills.length / 2, skills.length).map(skill => (
            <Skill key={skill._id} skill={skill} directionLeft/>
          ))} */}


        </div>   
    </motion.div>
  )
}

export default Skills