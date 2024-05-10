/* eslint @typescript-eslint/no-explicit-any: "off" */

import React, { useState } from 'react';
import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import FormInput from '@/components/FormInput';
import PriceInput from '@/components/PriceInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import {
  SelectStepperForms,
  updateDeliverySetup,
} from '@/Redux/Features/onboardingSlice';
import { useAddDeliverySetupMutation } from '@/api/apiSlice';
import Spinner from '@/spinner/Spinner';
import { useSweetAlert } from '@/Hooks/useSweetAlert';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { IServerError } from '@/Interfaces/OnboardingInterfaces';
import ErrorMessage from '@/components/ErrorMessage';

const initialValues = {
  allowPickup: '',
  allowPreOrder: '',
  storeStatus: '',
  deliveryFee: '',
  deliveryPeriod: '',
  pickupTimeFrom: '',
  pickupTimeTo: '',
};

const Step3: React.FC<IStepForm> = ({ onNext, onPrevious }) => {
  const dispatch = useAppDispatch();
  const { showAlert } = useSweetAlert();
  const { errors: customErrors, setErrors } = useGlobalHooks();

  const { deliverySetup } = useAppSelector(SelectStepperForms);

  const [addDeliveryDetails, { isLoading }] = useAddDeliverySetupMutation();

  const [preOrderBtn, setPreOrderBtn] = useState<{ [key: string]: boolean }>(
    { [deliverySetup.allowPreOrder]: true } || {},
  );

  const [togglePickBtn, setTogglePickBtn] = useState<{
    [key: string]: boolean;
  }>({ [deliverySetup.allowPickup]: true } || {});

  const [storeStatus, setStoreStatus] = useState<{
    [key: string]: boolean;
  }>({ [deliverySetup.storeStatus]: true } || {});

  const onSubmit = async (formData: any) => {
    // console.log(formData);

    dispatch(updateDeliverySetup(formData));

    try {
      const rsp = await addDeliveryDetails(formData);
      console.log(rsp);

      if ('data' in rsp) {
        showAlert(rsp?.data?.message);
        onNext();
      } else if ('error' in rsp) {
        setErrors({
          error: true,
          errMessage: (rsp.error as IServerError).data.message,
        });
        onNext();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signInSchema = Yup.object().shape({
    deliveryPeriod: Yup.string().required('Delivery Period is required'),
    pickupTimeFrom: Yup.string().required('From is required'),
    pickupTimeTo: Yup.string().required('To is required'),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: deliverySetup || initialValues,
      validationSchema: signInSchema,
      onSubmit,
    });

  const handlePreOrder = (id: string) => {
    setPreOrderBtn((prev) => ({
      [id]: !prev[id],
    }));
    handleChange({
      target: {
        name: 'allowPreOrder',
        value: id,
      },
    });
  };

  const handleStoreStatus = (id: string) => {
    setStoreStatus((prev) => ({ [id]: !prev[id] }));
    handleChange({
      target: {
        name: 'storeStatus',
        value: id,
      },
    });
  };

  const handlePickUpDelivery = (id: string, val: string) => {
    setTogglePickBtn((prev) => ({ [id]: !prev[id] }));

    handleChange({
      target: {
        name: 'allowPickup',
        value: val,
      },
    });
  };

  // console.log('redux:', deliverySetup);

  return (
    <form className='deliverySetup' onSubmit={handleSubmit}>
      <header className='mb-10'>
        <h1>Delivery Setup</h1>
        <p className='my-3'>Set up your delivery details and methods</p>
      </header>

      <section>
        <article className='flex flex-wrap items-center justify-between mb-7 w-full md:w-10/12'>
          <h5>Do you allow pick-up delivery?</h5>
          <div className='flex items-center gap-3'>
            <button
              type='button'
              id='Yes'
              onClick={() => handlePickUpDelivery('Yes', 'Yes')}
              className={togglePickBtn['Yes'] ? 'doBtn' : 'dontDoBtn'}
            >
              Yes, I do
            </button>
            <button
              type='button'
              id='No'
              onClick={() => handlePickUpDelivery('No', 'No')}
              className={togglePickBtn['No'] ? 'doBtn' : 'dontDoBtn'}
            >
              No, I don&apos;t
            </button>
          </div>
        </article>{' '}
        <article className='flex flex-wrap items-center justify-between mb-5 w-full md:w-11/12 '>
          <h5>Do you allow Pre-order of Products?</h5>
          <div className='flex items-center gap-3'>
            <button
              type='button'
              id='Yes'
              onClick={() => handlePreOrder('Yes')}
              className={preOrderBtn['Yes'] ? 'doBtn' : 'dontDoBtn'}
            >
              Yes, I do
            </button>
            <button
              type='button'
              id='No'
              onClick={() => handlePreOrder('No')}
              className={preOrderBtn['No'] ? 'doBtn' : 'dontDoBtn'}
            >
              No, I don&apos;t
            </button>
          </div>
        </article>
        <article className='my-[50px]'>
          <h5 className='mb-5'>What is your Pickup or Delivery Time?</h5>

          <FormInput
            id='deliveryPeriod'
            name='deliveryPeriod'
            type='text'
            placeholder='input your response here'
            onChange={handleChange}
            defaultValue={values.deliveryPeriod}
            onBlur={handleBlur}
            error={touched.deliveryPeriod && errors.deliveryPeriod}
          />
        </article>
        <article className='my-[50px]'>
          <h5 className='mb-5'>What is your Pickup or Delivery Time?</h5>

          <div className='flex flex-wrap gap-5'>
            <FormInput
              id='pickupTimeFrom'
              name='pickupTimeFrom'
              type='time'
              placeholder='09:30'
              className={'inputWrapper'}
              label='FROM'
              onChange={handleChange}
              DateTimeValue={values.pickupTimeFrom}
              onBlur={handleBlur}
              error={touched.pickupTimeFrom && Boolean(errors.pickupTimeFrom)}
            />
            <FormInput
              id='pickupTimeTo'
              name='pickupTimeTo'
              type='time'
              placeholder='08:00'
              className={'inputWrapper'}
              label='TO'
              DateTimeValue={values.pickupTimeTo}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.pickupTimeTo && Boolean(errors.pickupTimeTo)}
            />
          </div>
        </article>
        <article className='flex flex-wrap items-center justify-between mb-5 '>
          <h5>Select Store Status</h5>
          <div className='flex items-center gap-3'>
            <button
              type='button'
              id='Taking Orders'
              onClick={() => handleStoreStatus('Taking Orders')}
              className={storeStatus['Taking Orders'] ? 'doBtn' : 'dontDoBtn'}
            >
              Taking Orders Now
            </button>
            <button
              type='button'
              id='Pre-Order'
              onClick={() => handleStoreStatus('Pre-Order')}
              className={storeStatus['Pre-Order'] ? 'doBtn' : 'dontDoBtn'}
            >
              Pre-Order Only
            </button>
            <button
              type='button'
              id='Closed'
              onClick={() => handleStoreStatus('Closed')}
              className={storeStatus['Closed'] ? 'doBtn' : 'dontDoBtn'}
            >
              Closed
            </button>
          </div>
        </article>
        <article className='flex flex-wrap items-center gap-4 mt-10'>
          <div className='w-full md:w-5/12'>
            <h5>Set Delivery Fee</h5>
            <small className='text-[var(--Grey5)]'>
              P.S. You can always change this later
            </small>
          </div>
          <div className='w-full md:w-3/12'>
            <PriceInput
              id='deliveryFee'
              name='deliveryFee'
              onChange={(e) =>
                handleChange({
                  target: {
                    name: 'deliveryFee',
                    value: parseFloat(e.target.value),
                  },
                })
              }
              defaultValue={values.deliveryFee}
            />
          </div>
        </article>
      </section>

      <div className='flex justify-center my-5'>
        {customErrors.error && (
          <ErrorMessage message={customErrors.errMessage} />
        )}
      </div>

      <section className='flex items-center justify-between mt-9'>
        <button onClick={onPrevious} className='outline-btn'>
          PREVIOUS
        </button>{' '}
        <button className='main-btn' type='submit'>
          {isLoading ? <Spinner /> : ' SAVE AND CONTINUE'}
        </button>
      </section>
    </form>
  );
};

export default Step3;
