import React, { ChangeEvent, FormEvent } from 'react';
import PopUp from './popUps/PopUp';
import { BsXLg } from 'react-icons/bs';
import { useGlobalHooks } from '@/Hooks/globalHooks';

export interface IModal {
  id: string;
  close?: () => void;
  code: string;
  discount: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AddCouponCode: React.FC<IModal> = ({
  id,
  close,
  onChange,
  code,
  discount,
}) => {
  const { handleShow } = useGlobalHooks();

  const saveCoupon = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleShow(id);
  };

  return (
    <PopUp id={id}>
      <section className='wrapper max-w-[90%] flex flex-col py-10 px-10 justify-center'>
        <header className='flex justify-end mb-8'>
          <button onClick={close}>
            <BsXLg />{' '}
          </button>
        </header>
        <article className='w-full md:w-10/12 mx-auto'>
          <h2 className='text-[var(--secColor)] mb-3'>Add Your Coupon Code</h2>
          <p>
            Give Exclusive Discount to your customers using when you add a
            coupon code to buy with.
          </p>

          <form className='flex flex-col gap-3 mt-7' onSubmit={saveCoupon}>
            <section className='flex flex-wrap gap-3'>
              <div className='inputWrapper'>
                <label htmlFor='couponCode'>Coupon Code</label>

                <input
                  id='couponCode'
                  name='couponCode'
                  type='text'
                  placeholder='Enter your coupon code'
                  className='form-control'
                  onChange={onChange}
                  defaultValue={code}
                  required
                />
              </div>
              <div className='inputWrapper'>
                <label htmlFor='discount'>Equivilent Discount Amount</label>

                <input
                  id='discount'
                  name='discount'
                  type='number'
                  placeholder='Enter your coupon code'
                  className='form-control'
                  onChange={onChange}
                  defaultValue={discount}
                  required
                />
              </div>
            </section>

            <div>
              <button className='outline-btn' type='submit'>
                Add Coupon Code
              </button>
            </div>
          </form>
        </article>
      </section>
    </PopUp>
  );
};

export default AddCouponCode;
