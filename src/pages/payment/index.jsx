import React from "react";
import LabDetails from "./LabDetails";

const Payment = () => {
  // Dummy data for labs
  const labs = [
    {
      id: 1,
      name: "Lab 1",
      amountDue: 1200.5,
      totalInvoice: 5000.0,
      percentage: 24,
      invoicePrice: 2000.0,
      commissionInfo: 300.0,
      isActive: true,
    },
    {
      id: 2,
      name: "Lab 2",
      amountDue: 800.75,
      totalInvoice: 4000.0,
      percentage: 20,
      invoicePrice: 1500.0,
      commissionInfo: 250.0,
      isActive: false,
    },
    {
      id: 3,
      name: "Lab 3",
      amountDue: 1500.0,
      totalInvoice: 6000.0,
      percentage: 25,
      invoicePrice: 2500.0,
      commissionInfo: 400.0,
      isActive: true,
    },
  ];

  // Handlers for actions
  const handleDeactivate = (labId) => {
    console.log("Deactivate Lab:", labId);
  };

  const handleReactivate = (labId) => {
    console.log("Reactivate Lab:", labId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <LabDetails
        labs={labs}
        onDeactivate={handleDeactivate}
        onReactivate={handleReactivate}
      />
    </div>
  );
};

export default Payment;