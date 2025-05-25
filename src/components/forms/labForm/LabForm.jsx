import React, { useState, useEffect } from "react";
import LabInfoSection from "./LabInfoSection";
import ContactSection from "./ContactSection";
import PricingSection from "./PricingSection";
import BusinessSection from "./BusinessSection";
import ActiveStatusSection from "./ActiveStatusSection";

const LabForm = ({ initialData, onSubmit, setStatus, setMsg }) => {
  const [formData, setFormData] = useState({
    labName: "",
    location: "",
    address: "",
    primaryPhoneNumber: "",
    secondaryPhoneNumber: "",
    emailAddress: "",
    pricingType: "perInvoice",
    priceInvoice: "",
    monthlyPayment: "",
    commission: "",
    isActive: true,
    tradeLicenseInfo: "",
    businessRegistrationInfo: ""
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'isActive') {
      if (value === "true") {
        value = true
      } else {
        value = false
      }
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (initialData) {
      setFormData({
        labName: initialData.labName || "",
        location: initialData.location || "",
        address: initialData.address || "",
        primaryPhoneNumber: initialData.primaryPhoneNumber || "",
        secondaryPhoneNumber: initialData.secondaryPhoneNumber || "",
        emailAddress: initialData.emailAddress || "",
        pricingType: initialData.pricingType || "perInvoice",
        priceInvoice: initialData.priceInvoice || "",
        monthlyPayment: initialData.monthlyPayment || "",
        commission: initialData.commission || "",
        isActive: initialData.isActive || "YES",
        tradeLicenseInfo: initialData.tradeLicenseInfo || "",
        businessRegistrationInfo: initialData.businessRegistrationInfo || ""
      });
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = {
      labName: "Lab Name",
      location: "Location",
      address: "Address",
      primaryPhoneNumber: "Primary Phone Number",
      emailAddress: "Email Address"
    };

    const missingFields = Object.keys(requiredFields).filter(
      (key) => !formData[key]
    );

    if (missingFields.length > 0) {
      const missingFieldNames = missingFields.map(
        (key) => requiredFields[key]
      ).join(", ");
      const errorMessage = `Please fill in the following fields: ${missingFieldNames}.`;

      setMsg(errorMessage);
      setStatus("error");
      return;
    }

    if (formData.pricingType === "perInvoice" && !formData.priceInvoice) {
      setMsg("Please enter the Price per invoice");
      setStatus("error");
      return;
    }



    if (formData.pricingType === "monthly" && !formData.monthlyPayment) {
      setMsg("Please enter the monthly payment amount");
      setStatus("error");
      return;
    }

    if (formData.pricingType === "perInvoice" && !formData.commission) {
      setMsg("Please enter Lab Commission per Invoice");
      setStatus("error");
      return;
    }

    if (formData.pricingType === "perInvoice" && (parseFloat(formData.commission) > parseFloat(formData.priceInvoice))) {
      setMsg("Lab Commission can't be greater than Price per invoice");
      setStatus("error");
      return;
    }

    onSubmit(formData)
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-2xl shadow-xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {initialData ? "Edit Lab Details" : "Register New Lab"}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <LabInfoSection formData={formData} handleChange={handleChange} />
        <ContactSection formData={formData} handleChange={handleChange} />
        <PricingSection formData={formData} handleChange={handleChange} />
        <BusinessSection formData={formData} handleChange={handleChange} />
        <ActiveStatusSection formData={formData} handleChange={handleChange} />
        <div className="flex flex-col sm:flex-row justify-end gap-4">

          <button
            type="submit"
            className="btn-md"
          >
            {
              initialData ? "Update Lab" : "Register Lab"
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default LabForm;