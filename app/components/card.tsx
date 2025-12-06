import { Trash } from "lucide-react"

type Props = {
  title: string
  description: string
  tags: string[]
  onClick?: () => void
  onDelete?: () => void
}

const Card = ({ title, description, tags, onClick, onDelete }: Props) => {
  return (
    <div 
      onClick={onClick}
      className="relative border border-gray-100 rounded-lg p-4 shadow hover:shadow-lg transition-shadow bg-white cursor-pointer"
    >
      
      <Trash 
        className="size-4 text-gray-500 absolute top-2 right-2 hover:text-gray-600"
        onClick={(e) => {
          e.stopPropagation()     
          onDelete?.()          
        }}
      />

      <h3 className="text-lg font-bold text-gray-600 mb-2">{title}</h3>
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
