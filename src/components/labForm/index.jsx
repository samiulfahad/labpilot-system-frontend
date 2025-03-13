import React, { useState, useEffect } from "react";

const LabForm = ({ initialData, onSubmit }) => {
  // State for form values
  const [labName, setLabName] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState("");
  const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  // Pre-fill the form if initialData is provided
  useEffect(() => {
    if (initialData) {
      setLabName(initialData.labName || "");
      setLocation(initialData.location || "");
      setAddress(initialData.address || "");
      setPrimaryPhoneNumber(initialData.primaryPhoneNumber || "");
      setSecondaryPhoneNumber(initialData.secondaryPhoneNumber || "");
      setEmailAddress(initialData.emailAddress || "");
    }
  }, [initialData]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!labName || !location || !address || !primaryPhoneNumber || !emailAddress) {
      setMessage("Please fill in all required fields.");
      return;
    }

    // Prepare the lab data
    const labData = {
      labName,
      location,
      address,
      primaryPhoneNumber,
      secondaryPhoneNumber,
      emailAddress,
    };

    try {
      // Call the onSubmit prop (either for adding or editing)
      await onSubmit(labData);

      // Clear the form if it's a registration form
      if (!initialData) {
        setLabName("");
        setLocation("");
        setAddress("");
        setPrimaryPhoneNumber("");
        setSecondaryPhoneNumber("");
        setEmailAddress("");
      }

      setMessage(
        initialData
          ? "Lab details updated successfully!"
          : "Lab registration request submitted successfully!"
      );
    } catch (error) {
      setMessage(
        initialData
          ? "Failed to update lab details. Please try again."
          : "Failed to submit the lab registration request. Please try again."
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        {initialData ? "Edit Lab" : "Lab Registration Form"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Lab Information Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Lab Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Lab Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={labName}
                onChange={(e) => setLabName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Primary Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={primaryPhoneNumber}
                onChange={(e) => setPrimaryPhoneNumber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Secondary Phone Number</label>
              <input
                type="tel"
                value={secondaryPhoneNumber}
                onChange={(e) => setSecondaryPhoneNumber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
          >
            {initialData ? "Update Lab" : "Submit Request"}
          </button>
        </div>

        {/* Message */}
        {message && (
          <div className="mt-6 p-4 text-center text-sm text-green-700 bg-green-50 rounded-lg border border-green-100">
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default LabForm;