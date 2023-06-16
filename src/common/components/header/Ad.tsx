import Image from 'next/image';
import Link from 'next/link';

const Ad = () => {
  return (
    <div className='ad'>
      <button
        className='w-[77px] h-[28px] bg-white rounded-md flex items-center justify-center p-[7px_18px] z-50'
        type='button'
      >
        <span className='text-[12px] text-[#444]'>Special</span>
      </button>
      <Image
        className='z-50'
        src='/Smiling-Face-With-Heart-Eyes.svg'
        alt='Smiling Face With Heart Eyes'
        width={23}
        height={23}
      />
      <div className='flex relative'>
        <Image
          className='absolute -bottom-8 -left-[60px] z-40'
          src='/triangle.svg'
          alt='triangle'
          width={60}
          height={30}
        />
        <p className='opacity-70'>Get</p>
        <span className='font-bold mx-[0.5ch]'>20% Discount</span>
        <p className='opacity-70'>get for new account</p>
      </div>
      <Link className='underline underline-offset-4 ml-[7px]' href='/'>
        Register now
      </Link>
    </div>
  );
};

export default Ad;
