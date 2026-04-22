import React, { useState, useEffect } from 'react';
import SignupForm from './SignupForm';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 pt-10 px-4">
      <div className="max-w-lg mx-auto">
        
       
        <div className="flex justify-end mb-6">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="px-4 py-2 border rounded-md text-sm font-medium transition-colors border-gray-300 text-gray-700 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            {isDarkMode ? 'Switch to Light Mode' : 'Toggle Dark Mode'}
          </button>
        </div>

        <SignupForm />
        
      </div>
    </div>
  );
}