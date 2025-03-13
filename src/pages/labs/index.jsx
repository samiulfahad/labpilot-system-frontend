import React from "react";
import LabList from "./LabList";

const index = () => {
  // Dummy data for labs
  const labs = [
    {
      id: 1,
      name: "Lab 1",
      location: "New York, USA",
      isActive: true,
    },
    {
      id: 2,
      name: "Lab 2",
      location: "Los Angeles, USA",
      isActive: false,
    },
    {
      id: 3,
      name: "Lab 3",
      location: "Chicago, USA",
      isActive: true,
    },
  ];

  // Handlers for actions
  const handleViewLab = (labId) => {
    console.log("View Lab:", labId);
  };

  const handleEditLab = (labId) => {
    console.log("Edit Lab:", labId);
  };

  const handleEditOwner = (labId) => {
    console.log("Edit Owner:", labId);
  };

  const handleToggleStatus = (labId) => {
    console.log("Toggle Status:", labId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <LabList
        labs={labs}
        onViewLab={handleViewLab}
        onEditLab={handleEditLab}
        onEditOwner={handleEditOwner}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
};

export default index;