import React from 'react';
import { IStepForm } from '@/Interfaces/GlobalInterfaces';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import FormInput from '@/components/FormInput';
import {
  SelectStepperForms,
  updatePickup,
} from '@/Redux/Features/onboardingSlice';

// const initialValues = {
//   first_name: '',
//   last_name: '',
//   phone_number: '',
//   pickup_address: '',
// };

// const initialValues = {
//   pickup_details: {
//     first_name: '',
//     last_name: '',
//     phone_number: '',
//     pickup_address: '',
//   },

//   dropoff_details: {
//     first_name: '',
//     last_name: '',
//     phone_number: '',
//     dropoff_address: '',
//   },
// };

const Step3: React.FC<IStepForm> = ({ onNext, onPrevious }) => {
  const dispatch = useAppDispatch();
  const { pickupDetails } = useAppSelector(SelectStepperForms);

  const onSubmit = (formData: any) => {
    dispatch(updatePickup(formData));
    onNext && onNext();
  };
  console.log(pickupDetails);
  const reduxStoreetup = Object.keys(pickupDetails).length > 0 && pickupDetails;

  const initialValues = reduxStoreetup || {
    first_name: '',
    last_name: '',
    phone_number: '',
    pickup_address: '',
  };

  const signInSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    phone_number: Yup.string().required('Phone number is required'),
    pickup_address: Yup.string().required('Address is required'),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit,
    });

  return (
    <form className='deliverySetup' onSubmit={handleSubmit}>
      <header className='mb-4'>
        <h1>Send and Receive</h1>
      </header>

      <hr />

      <article className=' my-5'>
        <h3>Sender Information</h3>
        <section className='flex flex-wrap gap-3 justify-between mt-2'>
          <article className='inputWrapper'>
            <FormInput
              id='first_name'
              name='first_name'
              type='text'
              placeholder='input your response here'
              label='First Name'
              onChange={handleChange}
              defaultValue={values.first_name}
              onBlur={handleBlur}
              error={touched.first_name && errors.first_name}
            />
          </article>
          <article className='inputWrapper'>
            <FormInput
              id='last_name'
              name='last_name'
              type='text'
              label='Last Name'
              placeholder='input your response here'
              onChange={handleChange}
              defaultValue={values.last_name}
              onBlur={handleBlur}
              error={touched.last_name && errors.last_name}
            />
          </article>
          <article className='inputWrapper'>
            <FormInput
              id='phone_number'
              name='phone_number'
              type='text'
              label='Phone Number'
              placeholder='input your response here'
              onChange={handleChange}
              defaultValue={values.phone_number}
              onBlur={handleBlur}
              error={touched.phone_number && errors.phone_number}
            />
          </article>
          <article className='inputWrapper'>
            <FormInput
              id='pickup_address'
              name='pickup_address'
              type='text'
              label='Pickup Address'
              placeholder='input your response here'
              onChange={handleChange}
              defaultValue={values.pickup_address}
              onBlur={handleBlur}
              error={touched.pickup_address && errors.pickup_address}
            />
          </article>
        </section>
      </article>

      <hr />

      {/* <article className=' my-5'>
        <h3>Receiver Information</h3>
        <section className='flex flex-wrap gap-3 justify-between mt-2'>
          <article className='inputWrapper'>
            <FormInput
              id='first_name'
              name='first_name'
              type='text'
              placeholder='input your response here'
              label='First Name'
              onChange={handleChange}
              defaultValue={values.first_name}
              onBlur={handleBlur}
              error={touched.first_name && errors.first_name}
            />
          </article>
          <article className='inputWrapper'>
            <FormInput
              id='last_name'
              name='last_name'
              type='text'
              label='Last Name'
              placeholder='input your response here'
              onChange={handleChange}
              defaultValue={values.last_name}
              onBlur={handleBlur}
              error={touched.last_name && errors.last_name}
            />
          </article>
          <article className='inputWrapper'>
            <FormInput
              id='phone_number'
              name='phone_number'
              type='text'
              label='Phone Number'
              placeholder='input your response here'
              onChange={handleChange}
              defaultValue={values.phone_number}
              onBlur={handleBlur}
              error={touched.phone_number && errors.phone_number}
            />
          </article>
          <article className='inputWrapper'>
            <FormInput
              id='pickup_address'
              name='dropoff_address'
              type='text'
              label='Dropoff Address'
              placeholder='input your response here'
              onChange={handleChange}
              defaultValue={values.dropoff_address}
              onBlur={handleBlur}
              error={touched.dropoff_address && errors.dropoff_address}
            />
          </article>
        </section>
      </article> */}

      <section className='flex items-center justify-between mt-9'>
        <button onClick={onPrevious} className='outline-btn'>
          PREVIOUS
        </button>{' '}
        <button className='main-btn' type='submit'>
          CONTINUE
        </button>
      </section>
    </form>
  );
};

export default Step3;
