// components/SectionContainer.jsx
import React from 'react';

const SectionContainer = ({ title, subtitle, children, className = '' }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="mb-4">
        {title && <h2 className="text-2xl font-bold text-gray-800">{title}</h2>}
        {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;