import React from 'react';

// Exportação nomeada do componente Progress
export function Progress({ value, className, ...props }) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-6 ${className}`}>
      <div
        className="bg-blue-600 h-full rounded-full transition-all duration-300"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
