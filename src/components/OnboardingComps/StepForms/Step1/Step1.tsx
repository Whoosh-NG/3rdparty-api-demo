import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';

interface IStorSetup {
  onNext: () => void;
}

const Step1: React.FC<IStorSetup> = ({ onNext }) => {
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
          Send and Receive Package
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
          Inter-State Shipment
          {toggle['state'] ? (
            <FaCheckCircle color='var(--pryColor)' />
          ) : (
            <MdOutlineRadioButtonUnchecked />
          )}
        </button>{' '}
      </section>

      <section className=' my-10 types'>
        <button
          onClick={() => handleToggle('nation')}
          className={
            toggle['nation']
              ? 'typeActive catSide flex items-center gap-3 justify-between '
              : 'catSide flex items-center gap-3 justify-between '
          }
        >
          International Shipment
          {toggle['nation'] ? (
            <FaCheckCircle color='var(--pryColor)' />
          ) : (
            <MdOutlineRadioButtonUnchecked />
          )}
        </button>{' '}
      </section>

      <button
        className='main-btn w-full'
        type='submit'
        onClick={onNext}
        disabled={dis}
      >
        CONTINUE
      </button>
    </main>
  );
};

export default Step1;
