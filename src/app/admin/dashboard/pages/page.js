"use client";
import { useState } from 'react';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import "trix/dist/trix";
import { TrixEditor } from "react-trix";

export default function Categories() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleEditorReady(editor) {
    editor.insertString("What is Interest?");
  }

  function handleChange(html, text) {
  }

  return (
    <div className="flex bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`flex-1 transition-all duration-300 ease-in-out
        lg:ml-64
        ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Add padding top on mobile to account for the hamburger menu */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden px-2 lg:mt-0 mt-16">
            {/* Header Section */}
            <div className="border-b border-gray-200 bg-gray-50 p-6 mb-4">
              <h1 className="text-2xl font-bold text-gray-900">Manage Pages</h1>
              <p className="mt-1 text-sm text-gray-500">Add, edit, or remove Blog Pages</p>
            </div>

            <TrixEditor 
              onChange={handleChange} 
              onEditorReady={handleEditorReady} 
              className="my-8 border-2 border-grey-400 p-4 min-h-[200px]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}