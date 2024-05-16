import React from 'react';
import { IStepForm } from '@/Interfaces/GlobalInterfaces';

import { useAppSelector } from '@/Redux/reduxHooks';

import { SelectStepperForms } from '@/Redux/Features/onboardingSlice';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { useNavigate } from 'react-router-dom';

const Step4: React.FC<IStepForm> = ({ onPrevious }) => {
  const { orderedData } = useAppSelector(SelectStepperForms);
  const { setLoading, loading } = useGlobalHooks();
  const navigate = useNavigate();

  const subTotal = Number(orderedData.value) * Number(orderedData.quantity);
  const total = subTotal + orderedData?.serverRsp?.data?.total;

  const handlePayNow = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/success');
    }, 1000);
  };

  return (
    <main className='deliverySetup'>
      <article className=' my-5'>
        <h3>Order Details</h3>
        <hr />
        <section className='mt-5'>
          <article className='flex items-center justify-between'>
            <div className='  w-4/12'>
              <p>Items</p>
            </div>
            <div className='text-center w-3/12'>
              <p>Qty</p>
            </div>
            <div className='text-end w-4/12'>
              <p>Price(₦)</p>
            </div>
          </article>
          <article className='flex items-center justify-between mb-5'>
            <div className='  w-4/12'>
              <p>{orderedData?.name}</p>
            </div>
            <div className='text-center w-3/12'>
              <p>{orderedData?.quantity} </p>
            </div>
            <div className='text-end w-4/12'>
              <p> ₦{Number(orderedData?.value).toFixed(2)} </p>
            </div>
          </article>
          <hr />
          <article className=' my-5'>
            <div className='flex items-center justify-between my-1'>
              <p>Sub Total</p>
              <h4>₦{subTotal.toFixed(2)}</h4>
            </div>

            <div className='flex items-center justify-between my-1'>
              <p>Delivery Fee</p>
              <h4>₦{orderedData?.serverRsp?.data?.total.toFixed(2)}</h4>
            </div>

            <div className='flex items-center justify-between my-1'>
              <p>Total</p>
              <h4>₦{total}</h4>
            </div>
          </article>
        </section>
      </article>

      <section className='flex flex-wrap gap-3 items-center justify-between mt-9'>
        <button onClick={onPrevious} className='outline-btn'>
          PREVIOUS
        </button>{' '}
        <button disabled={loading} className='main-btn' onClick={handlePayNow}>
          {' '}
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </section>
    </main>
  );
};

export default Step4;
