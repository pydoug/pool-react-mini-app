import React from 'react';

// Exportação nomeada do componente Button
export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
