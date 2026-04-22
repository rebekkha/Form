import React from 'react';

export default function SuccessModal({ show, onClose, userName }) {
  if (!show) return null;

  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      
      // The modal box
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full mx-4 overflow-hidden">
        
        
        <div className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700">
          <h5 className="text-lg font-bold text-gray-900 dark:text-white">Success!</h5>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        
        <div className="px-6 py-4 text-gray-700 dark:text-gray-300">
          Your account has been created successfully, <span className="font-semibold">{userName || 'User'}</span>! Welcome aboard.
        </div>

        
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800 transition-colors"
          >
            Awesome
          </button>
        </div>

      </div>
    </div>
  );
}