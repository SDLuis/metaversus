'use client'

import { motion } from 'framer-motion'
import styles from '../styles'
import { slideIn, staggerContainer, textVariant } from '../utils/motion'

const Hero = () => (
  <section className='sm:py-4 py-12 sm:pl-10 pl-6'>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='flex justify-center items-center flex-col relative z-10'>
        <motion.h1
          variants={textVariant(1.2)}
          className={`${styles.heroHeading}`}
        >
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.1)}
          className='flex flex-row lg:-mt-5 justify-center items-center'
        >
          <div className={`${styles.heroHeading}`}>Ma</div>
          <div className={`${styles.heroDText}`} />
          <div className={`${styles.heroHeading}`}>Ness</div>
        </motion.div>
      </div>
      <div className='w-full flex justify-center'>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='relative w-full md:w-[80%] md:-mt-[13px] lg:-mt-[16px]'
          initial='hidden'
          whileInView='show'
        >
          <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-[30px] md:-top-[18px]' />
          <img src='/cover.png' alt='cover' className='w-full -mt-4 sm:mt-0 xl:-mt-[1px] sm:h-[362px] h-[350px] object-cover rounded-tl-[140px] z-10 relative' />
          <a href='#explore'>
            <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
              <img
                src='/stamp.png'
                alt='stamp'
                className='sm:w-[135px] w-[100px] sm:h-[135px] h-[100px] object-contain'
              />
            </div>
          </a>
        </motion.div>
      </div>
    </motion.div>
  </section>
)

export default Hero
