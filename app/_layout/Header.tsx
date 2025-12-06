"use client";
import React, { useState } from "react";
import MenuIcon from "../components/menuIcon";
import { Plus, Star, Trash2, Tag, Home } from "lucide-react";


const Header = ({
  onAddNote = () => {},
  onSearchResult = () => {},
  allCards = [],
  toggleSidebar = () => {}
}: any) => {

  const [isOpen, setIsOpen] = useState(false); // for add-note modal
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // for sidebar

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSearch = (text: string) => {
    const search = text.toLowerCase();

    const filtered = allCards.filter((card: any) =>
      card.title.toLowerCase().includes(search) ||
      card.text.toLowerCase().includes(search) ||
      card.tags.some((tag: string) => tag.toLowerCase().includes(search))
    );

    onSearchResult(filtered);
  };

  const handleAdd = async () => {
    if (title.trim() || description.trim()) {
      const ok = await onAddNote({ title, text: description, tags: [] });
      if (ok) {
        setTitle("");
        setDescription("");
        setIsOpen(false);
      }
    }
  };

  return (
    <div>

     
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-between px-4 py-4 items-center shadow-sm bg-white">
      
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button onClick={() => setIsSidebarOpen(true)}>
            <MenuIcon className="size-7 sm:size-9 text-gray-700 cursor-pointer" />
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Scribble</h1>
          
          
          <button
            onClick={() => setIsOpen(true)}
            className="ml-auto sm:hidden flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="size-5" />
          </button>
        </div>

       
        <input
          type="text"
          placeholder="Search notes ..."
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full sm:flex-1 pr-4 bg-gray-50 border text-black pl-4 border-gray-200 rounded-lg py-2 text-sm sm:text-base"
        />

        {/* ADD NOTE BUTTON - Desktop */}
        <button
          onClick={() => setIsOpen(true)}
          className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          <Plus className="size-5" />
          <span className="text-white">Note</span>
        </button>
      </div>


      {isSidebarOpen && (
        <>
         
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* SIDEBAR */}
          <div className="fixed top-0 left-0 h-full w-[200px] sm:w-[230px] bg-white shadow-xl p-4 z-50 animate-slide-right">
            <MenuIcon 
              onClick={toggleSidebar}
              className="size-7 sm:size-9 text-gray-700 cursor-pointer mb-4"
            />

            <h2 className="text-lg sm:text-xl font-bold mb-6 text-gray-700">Menu</h2>

            <div className="flex flex-col gap-3 sm:gap-4">

              <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm sm:text-base">
                <Home className="size-4 sm:size-5" /> Notes
              </button>

              <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm sm:text-base">
                <Star className="size-4 sm:size-5" /> Important
              </button>

              <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm sm:text-base">
                <Tag className="size-4 sm:size-5" /> Tags
              </button>

              <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm sm:text-base">
                <Trash2 className="size-4 sm:size-5" /> Trash
              </button>

            </div>
          </div>
        </>
      )}

      
      <style jsx>{`
        .animate-slide-right {
          animation: slideRight 0.25s ease-out forwards;
        }
        @keyframes slideRight {
          from {
            transform: translateX(-250px);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

      
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}></div>

          <div className='fixed top-1/2 left-1/2 w-[90%] sm:w-[400px] max-w-[400px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-4 sm:p-6 z-50'>
            <input 
              type='text' 
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='w-full border-b border-gray-300 outline-none pb-2 mb-3 text-black text-sm sm:text-base'
            />
            <textarea 
              placeholder='Take a note...'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='w-full text-black outline-none resize-none text-sm sm:text-base'
              rows={4}
            ></textarea>
            <div className='flex justify-end gap-2 sm:gap-3 mt-4'>
              <button onClick={handleAdd} className="px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-black bg-gray-200 text-sm sm:text-base">Add</button>
              <button className='px-3 sm:px-4 py-1 sm:py-2 rounded-lg bg-gray-200  text-black text-sm sm:text-base' onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;