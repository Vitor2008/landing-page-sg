import React from 'react'
import './Title.css'

interface TitleProps {
  subTitle: string;
  title: string;
}

const Title: React.FC<TitleProps> = ({subTitle, title}) => {
  return (
    <div className='title'>
      <h2 className='text-3xl lg:text-4xl font-bold mb-4'>{title}</h2>
      <p className='text-xl text-gray-600 max-w-2xl mx-auto'>{subTitle}</p>
    </div>
  )
}

export default Title
