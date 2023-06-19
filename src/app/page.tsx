import Creative from '@/common/components/sections/Creative';
import Sponsors from '@/common/components/sections/Features';
import Hero from '@/common/components/sections/Hero';
import Security from '@/common/components/sections/Security';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <Creative />
      <Security />
    </>
  );
};

export default HomePage;
