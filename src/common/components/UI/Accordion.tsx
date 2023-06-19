'use client';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

const Accordion: React.FC<{
  index: 'first' | 'second' | 'third';
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<
    SetStateAction<{
      first: boolean;
      second: boolean;
      third: boolean;
    }>
  >;
}> = ({ isOpen, setIsOpen, title, children, index }) => {
  return (
    <div
      className={`flex flex-col rounded-[10px] w-5/6 justify-center ${
        isOpen && 'bg-primary/[.15]'
      }`}
    >
      <div
        className='flex justify-between p-[13px_20px] cursor-pointer select-none'
        onClick={() =>
          setIsOpen((prev) => ({
            first: index === 'first' ? !prev.first : false,
            second: index === 'second' ? !prev.second : false,
            third: index === 'third' ? !prev.third : false,
          }))
        }
      >
        <h3
          className={`text-baseSize font-semibold  ${
            isOpen ? 'text-primary' : 'text-[#444]'
          }`}
        >
          {title}
        </h3>
        <Image
          className={`${isOpen && 'rotate-180'} transition-all`}
          src='/arr-up.svg'
          alt='arrow up icon'
          width={19}
          height={19}
        />
      </div>
      <p
        className={`text-baseSize font-medium text-[#444]/[.6] text-justify overflow-hidden  ${
          isOpen ? 'h-fit p-[13px_20px]' : 'h-0'
        }`}
      >
        {children}
      </p>
    </div>
  );
};

export default Accordion;
