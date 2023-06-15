import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center rounded-t-[40px] px-[80px] -translate-y-8 bg-white w-full h-[101px]'>
      <Image src='/logo.svg' alt='logo' width={162} height={48.68} />
      <ul className='flex gap-[60px] font-bold text-baseSize text-[#444444]'>
        <Link className='flex justify-center items-center gap-1' href='/'>
          <span className='text-[#6953D3]'>Home</span>
          <Image
            src='/arrow-down-p.svg'
            alt='arrow down icon'
            width={14}
            height={13}
          />
        </Link>
        <Link
          className='flex justify-center items-center gap-1 relative'
          href='/'
        >
          <span className=''>Pages</span>
          <Image
            className='text-[#444444]'
            src='/arrow-down-b.svg'
            alt='arrow down icon'
            width={14}
            height={13}
          />
          <span className='text-[8px] text-[#BC0000] bg-[#FD0000]/20 p-[2px_5px] rounded-[3px] absolute -top-3 -right-1'>
            Hot
          </span>
        </Link>
        <Link href='/'>Portfolio</Link>
        <Link href='/'>Blog</Link>
        <Link href='/'>Contact</Link>
      </ul>
      <div className='flex gap-4'>
        <Image src='/user-icon.svg' alt='user icon' width={28} height={28} />
        <Link
          className=' text-[12px] font-normal p-[6px_11px] border border-[#444444] rounded-full flex items-center justify-center gap-1'
          href='/'
        >
          <span>Join ITech Hub</span>
          <Image
            src='/arr-right.svg'
            alt='arrow right'
            width={15}
            height={15}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
