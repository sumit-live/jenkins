import React from 'react';

const Card = ({ title, children, className }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg mb-4 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
