import React from "react";

const LabDetails = ({ labs, onDeactivate, onReactivate }) => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Lab Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {labs.map((lab) => (
          <div key={lab.id} className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-shadow">
            {/* Lab Name & Status */}
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

            {/* Lab Financial Details */}
            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-medium">Lab ID:</span> {lab.id}</p>
              <p><span className="font-medium">Amount Due:</span> ${lab.amountDue.toFixed(2)}</p>
              <p><span className="font-medium">Total Invoice:</span> ${lab.totalInvoice.toFixed(2)}</p>
              <p><span className="font-medium">Percentage:</span> {lab.percentage}%</p>
              <p><span className="font-medium">Invoice Price:</span> ${lab.invoicePrice.toFixed(2)}</p>
              <p><span className="font-medium">Commission Info:</span> ${lab.commissionInfo.toFixed(2)}</p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4">
              {lab.isActive ? (
                <button
                  onClick={() => onDeactivate(lab.id)}
                  className="w-full px-4 py-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all"
                >
                  Deactivate
                </button>
              ) : (
                <button
                  onClick={() => onReactivate(lab.id)}
                  className="w-full px-4 py-2 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all"
                >
                  Reactivate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabDetails;
