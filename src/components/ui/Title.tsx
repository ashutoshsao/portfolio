'use client'
import React from 'react'

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h2 className="text-sm font-semibold leading-none text-[var(--foreground)]">
      {title}
    </h2>
  )
}

export default Title
