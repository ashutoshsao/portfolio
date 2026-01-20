'use client'
import React from 'react'

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className='px-10 w-full flex justify-center'>
      <h1 className='text-3xl font-display font-semibold tracking-[0.2em] text-[#a87cc3] text-center uppercase mb-8'>
        {title}
      </h1>
    </div>
  )
}

export default Title

