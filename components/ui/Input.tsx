import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const baseStyles = 'w-full px-4 py-3 bg-white bg-opacity-80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#008A8A] focus:border-transparent transition duration-200 text-gray-800 placeholder-gray-500';
  
  const classes = `${baseStyles} ${className}`;

  return (
    <input className={classes} {...props} />
  );
};
