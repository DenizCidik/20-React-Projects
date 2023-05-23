import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index}) => (
    <div className={`flex flex-row p-6 feature-card rounded-[20px] ${index !== features.length -1 ? 'mb-6' : 'mb-0'} `}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className='w-[50%] object-contain h-[50%]'/>
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins text-white font-semibold text-[18px] leading-[23px] mb-1'>{title}</h4>
        <p className='font-poppins text-dimWhite font-normal text-[16px] leading-[24px] mb-1'>{content}</p>
      </div>
    </div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Lorem ipsum, dolor sit amet  consectetur adipisicing elit.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem conslis deserunt explicabo quas cupiditate quod minus voluptates, reur adipisicing elit. Perspiciatis, numquam. Sapiente omnis a beatae magnam. Cumque nulla sequi perferendis commodi mollitia!</p>
        <Button styles={'mt-5'} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business