import React from 'react';

const LabInfoSection = ({ formData, handleChange }) => (
  <div className="bg-gray-50 py-4 px-6 rounded-xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Lab Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="labName"
          value={formData.labName}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
          placeholder="Enter lab name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
          placeholder="City"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Address <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
          placeholder="Full address"
        />
      </div>
    </div>
  </div>
);

export default LabInfoSection;
