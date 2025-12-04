"use client";
import React, { useState } from "react";
import MenuIcon from "../components/menuIcon";
import { Plus } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex gap-5 justify-between px-4 py-4 items-center">
        <div className="flex items-center gap-3">
          <MenuIcon className="size-9 text-gray-700" />
          <h1 className="text-2xl font-bold text-gray-800">Scribble</h1>
        </div>

        <input
          type="text"
          placeholder="Search notes ..."
          className="w-full pr-4 bg-gray-50 border pl-10 border-gray-200 rounded-lg py-2"
        />

        {/* Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="size-5" />
          <span className="hidden sm:inline">Note</span>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <>
          {/* BACKDROP */}
          <div 
            className='fixed inset-0 bg-black/50' 
            onClick={() => setIsOpen(false)}
          ></div>
          {/* MODAL BOX */}
          <div className='fixed top-1/2 left-1/2 w-[400px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-4 z-50'>
            
            <input 
              type='text' 
              placeholder='Title'
              className='w-full border-b border-gray-300 outline-none pb-2 mb-3'
            />
            <textarea 
              placeholder='Take a note...'
              className='w-full outline-none resize-none'
              rows={4}
            ></textarea>
            <div className='flex justify-end gap-3 mt-4'>
              <button className="px-4 py-1 rounded-lg bg-gray-200">Add</button>
              <button 
                className='px-4 py-1 rounded-lg bg-gray-200'
                onClick={() => setIsOpen(false)}
              >
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