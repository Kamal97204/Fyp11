// components/ProjectInfoBox.jsx
import React from 'react';

const ProjectInfoBox = ({ title, description, status, deadline, students }) => {
  const statusColors = {
    'Planning': 'bg-purple-100 text-purple-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'Completed': 'bg-green-100 text-green-800',
    'On Hold': 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
          {status}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Deadline</p>
          <p className="font-medium text-gray-800">{deadline}</p>
        </div>
        <div>
          <p className="text-gray-500">Students</p>
          <p className="font-medium text-gray-800">{students}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoBox;