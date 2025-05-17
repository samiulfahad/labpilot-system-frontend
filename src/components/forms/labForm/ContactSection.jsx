import React from 'react';

const ContactSection = ({ formData, handleChange }) => (
  <div className="bg-gray-50 p-6 rounded-xl">
    <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
      Contact Details
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Primary Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="primaryPhoneNumber"
          value={formData.primaryPhoneNumber}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
          placeholder="01xxxx"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Secondary Phone
        </label>
        <input
          type="tel"
          name="secondaryPhoneNumber"
          value={formData.secondaryPhoneNumber}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Optional"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
          placeholder="lab@example.com"
        />
      </div>
    </div>
  </div>
);

export default ContactSection;