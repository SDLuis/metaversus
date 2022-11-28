'use client'

import { motion } from 'framer-motion'

import { fadeIn } from '../utils/motion'

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className='flex md:flex-row flex-col gap-4'
  >
    <img
      src={imgUrl}
      alt='planet-01'
      className='md:w-[200px] w-full h-[190px] rounded-[32px] object-cover'
    />
    <div className='w-full flex justify-between items-center'>
      <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
        <p className='font-normal lg:text-[32px] text-[26px] text-white'>
          {title}
        </p>
        <p className='mt-[16px] font-normal lg:text-[16px] text-[14px] text-secondary-white'>
          {subtitle}
        </p>
      </div>

      <div
        className='lg:flex cursor-pointer hidden items-center justify-center w-[85px] h-[85px] rounded-full bg-transparent border-[1px] border-white'
      >
        <img
          src='/arrow.svg'
          alt='arrow'
          className='w-[35%] h-[35%] object-contain'
        />
      </div>
    </div>
  </motion.div>
)

export default InsightCard
