import React from 'react';
import Sec1 from './Sec1';
import Sec2 from './Sec2';
import Sec3 from './Sec3';

export default function NewsCompenent() {
  return (
    <div className='w-full overflow-y-auto'>
      <Sec1 />
      <Sec2 />
      <Sec3 />
    </div>
  );
}