import React from 'react'

type Props = {
  title: string
  description: string
  tags: string[]
}

const Card = ({ title, description, tags }: Props) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow bg-white">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag, i) => (
          <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-700">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Card