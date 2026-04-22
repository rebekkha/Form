import React, { useState } from 'react';
import SuccessModal from './SuccessModal';

export default function SignupForm() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  
  const inputClasses = "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-colors duration-300">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Create an Account
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClasses} required />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} required />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className={inputClasses} required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className={inputClasses} required>
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
            </select>
          </div>

          <div className="flex items-center mt-2">
            <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" required />
            <label htmlFor="agree" className="ml-2 block text-sm text-gray-900 dark:text-gray-200">
              I agree to the terms and conditions
            </label>
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-colors">
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <SuccessModal 
        show={showModal} 
        userName={formData.name}
        onClose={() => {
          setShowModal(false);
          setFormData({ name: '', email: '', password: '', gender: '', agree: false });
        }} 
      />
    </>
  );
}