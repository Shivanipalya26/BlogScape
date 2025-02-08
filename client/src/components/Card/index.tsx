import React from 'react';

type CardProps = {
  title?: string;
  icon?: string;
  description?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, icon, description, children }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-teal-600 mb-2">
        {icon} {title}
      </h3>
      <p className="text-gray-600">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Card;
