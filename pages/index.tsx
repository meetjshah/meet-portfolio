import type { GetStaticProps } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
const  Header = dynamic(() => import('../components/Header'), { ssr: false })
// import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import dynamic from 'next/dynamic';
// import Link from 'next/link';
// import { Experience, PageInfo, Project, Skill, Social } from '../typings';
// import { fetchPageInfo } from '../utils/fetchPageInfo';
// import { fetchExperiences } from '../utils/fetchExperiences';
// import { fetchSkills } from '../utils/fetchSkills';
// import { fetchProjects } from '../utils/fetchProjects';
// import { fetchSocials } from '../utils/fetchSocials';


type Props = {
  // pageInfo: PageInfo;
  // experiences: Experience[];
  // skills: Skill[];
  // projects: Project[];
  // socials: Social[];

}
// pageInfo, experiences, skills, projects, socials
const Home = ({}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar
     scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
      {/* {pageInfo?.name} */}
        <title> Meet Shah - Portfolio</title>
      </Head>

      {/* Header socials={socials}*/}
      <Header />

      {/* Hero pageInfo={pageInfo}*/}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About pageInfo={pageInfo}*/}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience experiences={experiences}*/}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills skills={skills}*/}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects projects={projects}*/}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      
      {/* <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
            src='https:i.imgur.com/e2yvD6A.png'
            alt=''
            />
          </div>
        </footer>
      </Link> */}
    </div>
  )
}

export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocials();

//   return {
//     props: {
//       // pageInfo,
//       // experiences,
//       // skills,
//       // projects,
//       // socials,
//     },

//     revalidate: 10,
//   }
// }
