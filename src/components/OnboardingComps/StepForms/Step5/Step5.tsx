import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import FormInput from '@/components/FormInput';
import {
  SelectStepperForms,
  updateOrderDetails,
} from '@/Redux/Features/onboardingSlice';

interface IStorSetup {
  onNext: () => void;
  onPrevious: () => void;
}

const Step5: React.FC<IStorSetup> = ({ onPrevious, onNext }) => {
  const dispatch = useAppDispatch();
  const { orderDetails } = useAppSelector(SelectStepperForms);

  const onSubmit = (formData: any) => {
    dispatch(updateOrderDetails(formData));
    onNext();
  };

  const reduxStoreetup = Object.keys(orderDetails).length > 0 && orderDetails;

  const initialValues = reduxStoreetup || {
    name: '',
    value: '',
    quantity: '',
    carrier_type: '',
    description: '',
    weight: '',
  };

  const signInSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    value: Yup.string().required('Valueis required'),
    description: Yup.string().required('Description is required'),
    weight: Yup.string().required('Weight is required'),
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
              id='name'
              name='name'
              type='text'
              placeholder='input your response here'
              label='Item Name'
              onChange={handleChange}
              defaultValue={values.name}
              onBlur={handleBlur}
              error={touched.name && errors.name}
            />
          </article>
          <article className='inputWrapper'>
            <FormInput
              id='value'
              name='value'
              type='text'
              label='Item Price'
              placeholder='input your response here'
              onChange={handleChange}
              defaultValue={values.value}
              onBlur={handleBlur}
              error={touched.value && errors.value}
            />
          </article>
          <article className='inputWrapper'>
            <FormInput
              id='quantity'
              name='quantity'
              type='text'
              label='Item Quantity'
              placeholder='input your response here'
              onChange={handleChange}
              defaultValue={values.quantity}
              onBlur={handleBlur}
              error={touched.quantity && errors.quantity}
            />
          </article>
          <article className='inputWrapper'>
            <FormInput
              id='description'
              name='dropoff_address'
              type='text'
              label='Item description'
              placeholder='input your response here'
              onChange={handleChange}
              defaultValue={values.description}
              onBlur={handleBlur}
              error={touched.description && errors.description}
            />
          </article>
          <article className='inputWrapper'>
            <FormInput
              id='weight'
              name='weight'
              type='text'
              label='Dropoff Address'
              placeholder='input your response here'
              onChange={handleChange}
              defaultValue={values.weight}
              onBlur={handleBlur}
              error={touched.weight && errors.weight}
            />
          </article>
        </section>
      </article>

      <section className='flex items-center justify-between mt-9'>
        <button onClick={onPrevious} className='outline-btn'>
          PREVIOUS
        </button>{' '}
        <button className='main-btn' type='submit'>
          {'DONE'}
        </button>
      </section>
    </form>
  );
};

export default Step5;
