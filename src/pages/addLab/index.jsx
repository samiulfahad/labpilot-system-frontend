import React from "react";
import LabForm from "../../components/labForm";

const AddLab = () => {
  const handleSubmit = async (labData) => {
    // Send a POST request to add a new lab
    const response = await fetch("/api/labs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(labData),
    });

    if (!response.ok) {
      throw new Error("Failed to add lab");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <LabForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddLab;