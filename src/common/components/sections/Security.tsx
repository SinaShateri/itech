import Image from 'next/image';
import Link from 'next/link';
import GradientText from '../UI/GradientText';
import SectionTitle from '../UI/SectionTitle';
import SecurityAccordions from './SecurityAccordions';

const Security = () => {
  return (
    <section className='w-full grid grid-cols-2 justify-center pl-[80px]'>
      <div className='w-full'>
        <Link
          className='text-baseSize font-medium text-primary p-3 bg-primary/[.12] w-fit rounded-[5px] '
          href='/'
        >
          Notero-Easy Note App
        </Link>
        <SectionTitle>
          Your Notes
          <GradientText>Security</GradientText>
        </SectionTitle>
        <p className='text-baseSize font-medium leading-[30px] text-[#444]/[.6] py-[25px] w-[455px]'>
          Automatically syncs across all your devices. You can also access and
          write notes without internet connection.
        </p>
        <SecurityAccordions />
      </div>
      <Image src='/security.png' alt='security' width={665} height={670} />
    </section>
  );
};

export default Security;
