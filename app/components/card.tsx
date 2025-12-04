import React from 'react'
type props = {
    title:string,
    description:string
}

const card = ({title,description}:props) => {
  return (
    <div className='w-auto  rounded-xl py-6 px-4 bg-white border border-gray-400 '>
      <h1 className='font-normal text-lg mb-1 text-gray-800'>{title}</h1>
      <h1 className='text-sm text-gray-800'>{description}</h1>

    </div>
  )
}

export default card
