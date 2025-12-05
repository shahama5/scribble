import React from 'react'

const modalEdit = ({ selectedCard, onRemoveTag }: any) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {selectedCard?.tags?.map((tag: string, i: number) => (
        <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-700 flex items-center gap-1">
          {tag}
          <button onClick={() => onRemoveTag(tag)} className="ml-1 text-gray-500 hover:text-gray-700">×</button>
        </span>
      ))}
    </div>
  )
}

export default modalEdit