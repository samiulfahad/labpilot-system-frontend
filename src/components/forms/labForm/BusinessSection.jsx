import React from 'react';

const BusinessSection = ({ formData, handleChange }) => (
  <div className="bg-gray-50 py-4 px-6 rounded-xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Trade License Information
        </label>
        <textarea
          name="tradeLicenseInfo"
          value={formData.tradeLicenseInfo}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          rows="3"
          placeholder="License number, expiry date, issuing authority..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Business Registration Information
        </label>
        <textarea
          name="businessRegistrationInfo"
          value={formData.businessRegistrationInfo}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          rows="3"
          placeholder="Registration number, business type, tax ID..."
        />
      </div>
    </div>
  </div>
);

export default BusinessSection;
