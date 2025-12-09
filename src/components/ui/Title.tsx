'use client'
import React from 'react'

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className='px-10'>
      <h1 className='text-[1.6rem] max-sm:text-2xl font-semibold tracking-tight text-start max-sm:text-center'>
        {title}
      </h1>
    </div>
  )
}

export default Title

