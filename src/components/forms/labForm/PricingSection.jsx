import React from 'react';

const PricingSection = ({ formData, handleChange }) => (
  <div className="bg-gray-50 py-4 px-6 rounded-xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Pricing Type
        </label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="pricingType"
              value="perInvoice"
              required
              checked={formData.pricingType === "perInvoice"}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-2 text-gray-700">Per Invoice Pricing</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="pricingType"
              value="monthly"
              required
              checked={formData.pricingType === "monthly"}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-2 text-gray-700">Monthly Fixed Payment</span>
          </label>
        </div>
      </div>

      {formData.pricingType === "perInvoice" ? (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Price/Invoice
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">৳</span>
              <input
                type="text"
                name="priceInvoice"
                required
                value={formData.priceInvoice}
                onChange={handleChange}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="0.00"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Lab Commission
            </label>
            <div className="relative">
              <input
                type="number"
                name="commission"
                value={formData.commission}
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="0-100"
                min="0"
                max="100"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Monthly Payment (BDT)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">৳</span>
            <input
              type="text"
              name="monthlyPayment"
              value={formData.monthlyPayment}
              required
              onChange={handleChange}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter monthly payment amount"
            />
          </div>
        </div>
      )}
    </div>
  </div>
);

export default PricingSection;