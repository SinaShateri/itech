import React from 'react';

const GradientText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <span className='text-gradient'> {children}</span>;
};

export default GradientText;
