import React from 'react';
import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import FormInput from '@/components/FormInput';
import {
  SelectStepperForms,
  updateDropOff,
} from '@/Redux/Features/onboardingSlice';

const Step4: React.FC<IStepForm> = ({ onNext, onPrevious }) => {
  const dispatch = useAppDispatch();
  const { dropoffDetails } = useAppSelector(SelectStepperForms);

  const onSubmit = (formData: any) => {
    dispatch(updateDropOff(formData));
    onNext();
  };

  const reduxStoreetup =
    Object.keys(dropoffDetails).length > 0 && dropoffDetails;

  const initialValues = reduxStoreetup || {
    first_name: '',
    last_name: '',
    phone_number: '',
    dropoff_address: '',
  };

  const signInSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    phone_number: Yup.string().required('Phone number is required'),
    dropoff_address: Yup.string().required('Address is required'),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit,
    });

  return (
    <form className='deliverySetup' onSubmit={handleSubmit}>
      <article className=' my-5'>
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
      </article>

      <section className='flex flex-wrap gap-3 items-center justify-between mt-9'>
        <button onClick={onPrevious} className='outline-btn'>
          PREVIOUS
        </button>{' '}
        <button className='main-btn'>CONTINUE</button>
      </section>
    </form>
  );
};

export default Step4;
