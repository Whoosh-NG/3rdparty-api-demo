import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import React, { useState } from 'react';

import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';

const Step2: React.FC<IStepForm> = ({ onNext, onPrevious }) => {
  const [toggle, setToggle] = useState<{ [key: string]: boolean }>({});

  const dis = Object.keys(toggle).length === 0;

  const handleToggle = (id: string) => {
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

  return (
    <main>
      <header className='mb-4'>
        <h1>Select your shipping type</h1>
      </header>

      <hr />

      <section className=' my-10 types'>
        <button
          onClick={() => handleToggle('send')}
          className={
            toggle['send']
              ? 'typeActive catSide flex items-center gap-3 justify-between '
              : 'catSide flex items-center gap-3 justify-between '
          }
        >
          Same Day Delivery
          {toggle['send'] ? (
            <FaCheckCircle color='var(--pryColor)' />
          ) : (
            <MdOutlineRadioButtonUnchecked />
          )}
        </button>{' '}
      </section>
      <section className=' my-10 types'>
        <button
          onClick={() => handleToggle('state')}
          className={
            toggle['state']
              ? 'typeActive catSide flex items-center gap-3 justify-between '
              : 'catSide flex items-center gap-3 justify-between '
          }
        >
          <span className='text-start'>
            Bulk Delivery <br />
            <small className='font-normal'>
              upto 30% lesser - minimum of 5 dropoff
            </small>
          </span>
          {toggle['state'] ? (
            <FaCheckCircle color='var(--pryColor)' />
          ) : (
            <MdOutlineRadioButtonUnchecked />
          )}
        </button>{' '}
      </section>

      <section className='flex items-center justify-between mt-9'>
        <button onClick={onPrevious} className='outline-btn'>
          PREVIOUS
        </button>{' '}
        <button
          className='main-btn'
          type='button'
          onClick={onNext}
          disabled={dis}
        >
          CONTINUE
        </button>
      </section>
    </main>
  );
};

export default Step2;
