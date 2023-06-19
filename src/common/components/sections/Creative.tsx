import Image from 'next/image';
import Link from 'next/link';
import GradientText from '../UI/GradientText';
import SectionTitle from '../UI/SectionTitle';

const Creative = () => {
  return (
    <section className='w-full flex justify-between gap-3 pr-[80px]'>
      <Image
        src='/creative-section-png.png'
        alt='Creative section'
        width={726}
        height={871}
      />
      <div className='flex flex-col items-start w-full justify-self-start pt-28'>
        <Link
          className='text-baseSize font-medium text-primary p-3 bg-primary/[.12] w-fit rounded-[5px] '
          href='/'
        >
          Notero-Easy Note App
        </Link>
        <SectionTitle>
          The Noter For <br />
          <GradientText>Creative</GradientText>
        </SectionTitle>
        <p className='text-baseSize font-medium leading-[30px] text-[#444]/[.6] text-justify py-[35px] w-[455px]'>
          Stay focused and productive with a clean clutter-free note space. the
          flexible ways to organize your notes: hashtags , nested notebooks ,
          pining notes to the top of the note list, ect.
        </p>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center gap-4'>
            <Image src='/app-icon.svg' alt='app icon' width={43} height={43} />
            <p className='text-baseSize font-bold leading-[34px] text-[#1E1E1E]'>
              Filtering notes using matched keywords
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <Image
              src='/ref-icon.svg'
              alt='refresh icon'
              width={43}
              height={43}
            />
            <p className='text-baseSize font-bold leading-[34px] text-[#1E1E1E]'>
              Automatically sync in real time
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <Image
              src='/arr-left-down-icon.svg'
              alt='arr left down icon'
              width={43}
              height={43}
            />
            <p className='text-baseSize font-bold leading-[34px] text-[#1E1E1E]'>
              Complete note editor with rich text options
            </p>
          </div>
        </div>
        <Link
          className='w-[185px] h-[49px] bg-primary rounded-full flex justify-center items-center text-white text-[20px] font-medium mt-[35px]'
          href='/'
        >
          <span>Free Register</span>
        </Link>
      </div>
    </section>
  );
};

export default Creative;
