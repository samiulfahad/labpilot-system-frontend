import React from 'react';

const ActiveStatusSection = ({ formData, handleChange }) => {
  const ActiveStatusDropdown = () => (
    <div className="relative">
      <select
        name="isActive"
        value={formData.isActive}
        onChange={handleChange}
        className={
          (formData.isActive === true ? "text-green-500 " : "text-red-500 ") +
          "w-full font-bold px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white"
        }
      >
        <option className='text-green-500 font-bold' value="true" >Active</option>
        <option className='text-red-500 font-bold' value="false" >Inactive</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Account Status
          </label>
          <ActiveStatusDropdown />
        </div>
      </div>
    </div>
  );
};

export default ActiveStatusSection;