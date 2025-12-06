import {
  Home,
  Star,
  Tag,
  Trash,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div
      className={`h-screen fixed top-0 left-0 bg-white shadow-md transition-all duration-300 z-40
        ${isOpen ? "w-60" : "w-20"} 
      `}
    >
      <div className="flex flex-col mt-20 gap-2 px-3">

        {[
          { icon: <Home size={24} />, label: "Notes" },
          { icon: <Star size={24} />, label: "Important" },
          { icon: <Tag size={24} />, label: "Tags" },
          { icon: <Trash size={24} />, label: "Trash" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 text-gray-700 cursor-pointer hover:bg-gray-100 p-3 rounded-full transition-all"
          >
            <div className="shrink-0">
              {item.icon}
            </div>
            {isOpen && <span className="whitespace-nowrap">{item.label}</span>}
          </div>
        ))}

      </div>
    </div>
  );
}