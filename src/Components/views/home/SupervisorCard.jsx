// components/SupervisorCard.jsx
import React from 'react';

const SupervisorCard = ({ name, department, expertise, availability, rating, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-16 w-16 rounded-full bg-gray-200 overflow-hidden">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">{department}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-700"><span className="font-medium">Expertise:</span> {expertise.join(', ')}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className={`px-2 py-1 text-xs rounded-full ${
              availability === 'Available' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {availability}
            </span>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm text-gray-600">{rating}</span>
            </div>
          </div>
        </div>
        <button className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default SupervisorCard;