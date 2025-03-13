import React from "react";

const LabList = ({ labs, onViewLab, onEditLab, onEditOwner, onManageUsers, onToggleStatus }) => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Registered Labs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {labs.map((lab) => (
          <div
            key={lab.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-5 border border-gray-200"
          >
            {/* Lab Header */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{lab.name}</h3>
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  lab.isActive
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}
              >
                {lab.isActive ? "Active" : "Inactive"}
              </span>
            </div>

            {/* Lab Location */}
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-medium">Location:</span> {lab.location}
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => onViewLab(lab.id)}
                className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all"
              >
                View Details
              </button>
              <button
                onClick={() => onEditLab(lab.id)}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
              >
                Edit Private Info
              </button>
              <button
                onClick={() => onEditOwner(lab.id)}
                className="px-4 py-2 text-sm text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all"
              >
                Edit Public Info
              </button>
              <button
                onClick={() => onManageUsers(lab.id)}
                className="px-4 py-2 text-sm text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition-all"
              >
                Manage Users
              </button>
              {/* <button
                onClick={() => onToggleStatus(lab.id)}
                className={`col-span-2 px-4 py-2 text-sm text-white rounded-lg transition-all ${
                  lab.isActive
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {lab.isActive ? "Deactivate" : "Activate"}
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabList;
