import Image from 'next/image';
import Link from 'next/link';

const Landing = () => {
  return (
    <section className='relative flex flex-col mt-[50px]'>
      <Link
        className='text-baseSize font-medium text-primary p-3 bg-primary/[.12] w-fit rounded-[5px]'
        href='/'
      >
        Notero-Easy Note App
      </Link>
      <h1 className='w-fit text-[#333333] text-[60px] font-bold mt-11 leading-[72px]'>
        Note
        <span className='text-gradient'> Your Everything </span>
        <br />
        In One App
      </h1>
      <p className='mt-5 text-[20px] text-[#333]/[.6] leading-6'>
        No Coding required to make customization. the live customizer <br /> has
        everything you need.
      </p>
      <div className='pt-[58px]'>
        <Link
          className='flex w-fit text-white justify-center items-center gap-3 rounded-full bg-primary p-[16px_22px]'
          href='/'
        >
          <Image
            src='/Apple-Logo.svg'
            alt='Apple Logo'
            width={30}
            height={30}
          />
          <span className='h-[24px] w-[2px] bg-white' />
          <span className='text-[20px]'>Download App</span>
        </Link>
      </div>
      <Image
        className='absolute top-0 -right-5'
        src='/section-image.png'
        alt='section image'
        width={570}
        height={670}
      />
    </section>
  );
};

export default Landing;
