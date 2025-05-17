import React, { useState, useEffect } from "react";
import LabInfoSection from "./LabInfoSection";
import ContactSection from "./ContactSection";
import PricingSection from "./PricingSection";
import BusinessSection from "./BusinessSection";
import FormActions from "./FormActions";
import ActiveStatusSection from "./ActiveStatusSection";

const LabForm = ({ initialData, onSubmit }) => {
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
    isActive: "YES",
    tradeLicenseInfo: "",
    businessRegistrationInfo: ""
  });

  const [message, setMessage] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
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
    setIsSubmitting(true);

    if (!formData.labName || !formData.location || !formData.address || 
        !formData.primaryPhoneNumber || !formData.emailAddress) {
      setMessage({ text: "Please fill in all required fields.", type: "error" });
      setIsSubmitting(false);
      return;
    }

    if (formData.pricingType === "perInvoice" && !formData.priceInvoice) {
      setMessage({ text: "Please enter the price per invoice.", type: "error" });
      setIsSubmitting(false);
      return;
    }

    if (formData.pricingType === "monthly" && !formData.monthlyPayment) {
      setMessage({ text: "Please enter the monthly payment amount.", type: "error" });
      setIsSubmitting(false);
      return;
    }

    try {
      await onSubmit(formData);

      if (!initialData) {
        setFormData({
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
          isActive: "YES",
          tradeLicenseInfo: "",
          businessRegistrationInfo: ""
        });
      }

      setMessage({
        text: initialData ? "Lab updated successfully!" : "Lab registration submitted!",
        type: "success"
      });
    } catch (error) {
      setMessage({
        text: initialData ? "Update failed. Please try again." : "Submission failed. Please try again.",
        type: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {initialData ? "Edit Lab Details" : "Register New Lab"}
        </h2>
        <p className="mt-2 text-gray-600">
          {initialData ? "Update the lab information below" : "Fill in the lab details to register"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <LabInfoSection formData={formData} handleChange={handleChange} />
        <ContactSection formData={formData} handleChange={handleChange} />
        <PricingSection formData={formData} handleChange={handleChange} />
        <BusinessSection formData={formData} handleChange={handleChange} />
        <ActiveStatusSection formData={formData} handleChange={handleChange} />
        <FormActions 
          isSubmitting={isSubmitting} 
          message={message} 
          isEditMode={!!initialData} 
        />
      </form>
    </div>
  );
};

export default LabForm;