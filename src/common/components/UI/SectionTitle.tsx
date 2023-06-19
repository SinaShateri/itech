import React from 'react';

const SectionTitle: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <h2 className='text-[40px] text-[#333] font-bold leading-[48px] my-4'>
      {children}
    </h2>
  );
};

export default SectionTitle;
