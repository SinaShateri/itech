'use client';
import { useState } from 'react';
import Accordion from '../UI/Accordion';

const SecurityAccordions = () => {
  const [isOpen, setIsOpen] = useState({
    first: false,
    second: false,
    third: false,
  });

  return (
    <div className='flex flex-col gap-3'>
      <Accordion
        index={'first'}
        isOpen={isOpen.first}
        setIsOpen={setIsOpen}
        title='Create And Save Your Notes With Multi-Media'
      >
        Images, videos, PDFs and audio files are supported. Create math
        expressions and diagrams directly from the app. Take photos with the
        mobile app and save them to a note.
      </Accordion>
      <Accordion
        index={'second'}
        isOpen={isOpen.second}
        setIsOpen={setIsOpen}
        title='Web Clipper Extension '
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt
      </Accordion>
      <Accordion
        index={'third'}
        isOpen={isOpen.third}
        setIsOpen={setIsOpen}
        title='Protect Your Note With Lock'
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt
      </Accordion>
    </div>
  );
};

export default SecurityAccordions;
