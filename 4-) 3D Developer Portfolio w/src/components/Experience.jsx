import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';


const ExperienceCard = ({ experience }) => {
  return (
  <VerticalTimelineElement 
  contentStyle={{background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{ borderRight: '9px solid #1D1836'}}
  date={experience.date}
  iconStyle={{ background: experience.iconBg }}
  icon={
    <div className='flex justify-center h-full items-center content-center'>
      <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%]  object-contain items-center content-center'/>
    </div>
  }
  className='items-center content-center'
  >

  <div>
    <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
    <span className='text-secondary text-[15px]'>{experience.company_name}</span>

  </div>
  <ul className='mt-5 list-disc ml-5 space-y-2'>
    {experience.points.map((point,index) => (
      <li 
      key={`experience-point-${index}`} 
      className='text-white-100 text-[14px] pl-1 tracking-wider'
      >
        {point}

      </li>
    ))}
  </ul>

  </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}>

      <p className={styles.sectionSubText}>projects i have done</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>

    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>

        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience}/>
        ))}

      </VerticalTimeline>
    </div>

    </>
    )
}

export default SectionWrapper(Experience, 'experience')