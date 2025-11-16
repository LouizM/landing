import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ children, className, ...props }) => {
  const baseStyles = 'px-3 py-3 bg-white bg-opacity-80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#008A8A] focus:border-transparent transition duration-200 text-gray-800';
  
  const classes = `${baseStyles} ${className}`;

  return (
    <select className={classes} {...props}>
      {children}
    </select>
  );
};
