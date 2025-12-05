import React, { useState } from 'react'

const AddTag = ({ onAdd, onCancel }: any) => {
  const [tag, setTag] = useState("")

  return (
    <div className="mb-4">
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && onAdd(tag)} placeholder="Enter tag" className="w-full border p-2 rounded mb-2" autoFocus />
      <div className="flex gap-2">
        <button onClick={() => onAdd(tag)} className="px-3 py-1 bg-gray-300 text-black rounded text-sm">Add</button>
        <button onClick={onCancel} className="px-3 py-1 bg-gray-300 rounded text-sm">Cancel</button>
      </div>
    </div>
  )
}

export default AddTag