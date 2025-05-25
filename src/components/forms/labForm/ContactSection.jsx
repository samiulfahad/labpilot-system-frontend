const ContactSection = ({ formData, handleChange }) => (
  <div className="bg-gray-50 py-4 px-6 rounded-xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      <div>
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
