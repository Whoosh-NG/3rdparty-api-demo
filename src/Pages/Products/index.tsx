import { productData } from '@/components/AllData';
import StepForm from '@/components/OnboardingComps/StepForms/StepForm';
import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import './style.scss';

const Products = () => {
  const { id } = useParams();

  const renderData = productData.find((item) => item.id === Number(id));

  return (
    <main className='container productWrapper '>
      <h1 className='text-center pb-4'>Delivery Setup</h1>
      <hr />

      <section className='  flex flex-wrap justify-between gap-3 my-10'>
        <section className='w-full md:w-[40%] bg-[var(--pryColor)] p-4 shadow-md rounded-lg'>
          <figure className='h-[351px] rounded-lg overflow-hidden'>
            <img
              src={renderData?.productImage}
              alt=''
              className='h-full object-cover'
            />
          </figure>

          <div className='p-3 text-[#fff]'>
            <h4 className='font-bold text-[#fff] '>
              {renderData?.title} - ₦{renderData?.price}
            </h4>
            <p className='my-4 text-[var(--Grey6)] font-semibold'>
              {renderData?.description}
            </p>
            <hr />

            <div className='flex justify-between items-center'>
              <p className='text-[var(--secColor)] text-[10px] flex gap-2 items-center font-semibold mt-1'>
                {' '}
                Delivery in <FaRegClock /> 30-40 mins
              </p>
            </div>
          </div>
        </section>

        <section className='w-full md:w-[58%]'>
          <StepForm />
        </section>
      </section>
    </main>
  );
};

export default Products;
