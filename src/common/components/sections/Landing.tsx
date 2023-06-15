import Image from 'next/image';
import Link from 'next/link';

const Landing = () => {
  return (
    <section className='relative flex mt-[50px]'>
      <div>
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
          No Coding required to make customization. the live customizer <br />{' '}
          has everything you need.
        </p>
        <div className='pt-[58px] flex gap-[34px]'>
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
          <Link className='flex items-center gap-[13px]' href='/'>
            <Image
              src='/play-icon.svg'
              alt='play icon'
              width={58}
              height={56}
            />
            <p className='text-baseSize font-medium'>
              View <br /> Promotion
            </p>
          </Link>
        </div>
        <div className='flex'>
          <div className='flex items-center gap-[9px] mt-[50px]'>
            <Image
              src='/reload-icon.svg'
              alt='reload icon'
              width={41}
              height={43}
            />
            <p className='text-[14px] text-[#333] font-semibold'>
              Free 14 Days Trial
            </p>
          </div>
          <div className='flex items-center gap-[9px] ml-24 mt-[50px]'>
            <Image
              src='/wallet-icon.svg'
              alt='wallet icon'
              width={41}
              height={43}
            />
            <p className='text-[14px] text-[#333] font-semibold'>
              One Time Payment
            </p>
          </div>
        </div>
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
