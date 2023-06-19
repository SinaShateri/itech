import Image from 'next/image';
import Link from 'next/link';

const titleClass = 'text-baseSize font-bold text-black text-center';

const features = [
  {
    title: (
      <p className={titleClass}>
        Notes Powerful <br /> and Security
      </p>
    ),
    img: '/shield-icon.svg',
  },
  {
    title: (
      <p className={titleClass}>
        Easy Sort, Classify <br /> and Search
      </p>
    ),
    img: '/search-icon.svg',
  },
  {
    title: (
      <p className={titleClass}>
        Collaboration and <br /> Share
      </p>
    ),
    img: '/puzzle-icon.svg',
  },
  {
    title: (
      <p className={titleClass}>
        Quick Note In <br /> Everywhere
      </p>
    ),
    img: '/clock-icon.svg',
  },
  {
    title: (
      <p className={titleClass}>
        Write and Draw <br /> on Ipad
      </p>
    ),
    img: '/color-boom-icon.svg',
  },
];

const Sponsors = () => {
  return (
    <section className='relative flex flex-col items-center select-none -translate-y-36'>
      <h5 className='text-[30px] font-semibold text-[#333] z-30 mt-44'>
        <span className='text-primary'>25K+ Installation </span> and featured on
      </h5>
      <div className='z-30 py-20 border-b border-b-[#444]/[.4]'>
        <Image
          src='/companies-logos.svg'
          alt='companies logos'
          width={1049}
          height={75}
        />
      </div>
      <Link
        className='text-baseSize font-medium text-primary p-3 bg-white w-fit rounded-[5px] z-30 my-[22px]'
        href='/'
      >
        Notero-Easy Note App
      </Link>
      <h3 className='font-bold text-[40px] z-30 mt-3'>
        Awesome <span className='text-gradient'>Features</span>
      </h3>
      <div className='z-50 grid w-full grid-cols-5 justify-items-center'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='flex flex-col items-center gap-[20px] mt-[50px] z-50 pt-3'
          >
            <Image
              src={feature.img}
              alt='feature icon'
              width={133}
              height={133}
            />
            {feature.title}
          </div>
        ))}
      </div>
      <Image
        className='absolute top-0 z-20 !w-screen'
        src='/wave-1.svg'
        alt='wave'
        width={1283}
        height={920}
      />
      <Image
        className='absolute right-0 z-10 -top-0'
        src='/wave-2.svg'
        alt='wave'
        width={840}
        height={506}
      />
      <Image
        className='absolute z-40 translate-x-1/2 -bottom-16 -left-7'
        src='/circles.svg'
        alt='wave'
        width={700}
        height={700}
      />
    </section>
  );
};

export default Sponsors;
