import React from 'react';
import PopUp from '../popUps/PopUp';
import { IModal } from '@/Interfaces/GlobalInterfaces';
import { BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { SuccessLady } from '@/SVGs/CustomSVGs';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { useAppSelector } from '@/Redux/reduxHooks';
import { SelectStepperForms } from '@/Redux/Features/onboardingSlice';

const OnboardSuccessfully: React.FC<IModal> = ({ id, close }) => {
  const { handleShow } = useGlobalHooks();
  const { storeSetup } = useAppSelector(SelectStepperForms);

  return (
    <PopUp id={id}>
      <section className='wrapper w-full md:w-9/12 mx-auto flex flex-col py-10 px-10 justify-center'>
        <header className='flex justify-end mb-8'>
          <button onClick={close}>
            <BsXLg />{' '}
          </button>
        </header>

        <article className=' mx-auto flex flex-wrap justify-between gap-2 items-center'>
          <div className='w-full md:w-7/12'>
            <h2 className='text-[var(--secColor)] mb-3 uppercase'>
              CONGRATULATIONS, {storeSetup.storeName || 'StoreName'}!
            </h2>
            <p className='text-[25px] font-medium my-3 '>
              Your Store will become active once approved whilst waiting feel
              free to add more of your products and as well edit your store if
              need be
            </p>

            <div>
              <Link
                to='/'
                className='outline-btn'
                type='submit'
                onClick={() => handleShow('success')}
              >
                Go to Store
              </Link>
            </div>
          </div>

          <div className='w-full md:w-4/12'>
            <SuccessLady />{' '}
          </div>
        </article>
      </section>
    </PopUp>
  );
};

export default OnboardSuccessfully;
