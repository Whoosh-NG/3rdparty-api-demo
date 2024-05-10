/* eslint @typescript-eslint/no-explicit-any: "off" */

import FormInput from '@/components/FormInput';
import { useFormik } from 'formik';
import React, { FormEvent, useState } from 'react';
import * as Yup from 'yup';

interface IStorSetup {
  onPrevious: () => void;
}

const initialValues = {
  name: '',
  amount: '',
  description: '',
  couponCode: '',
  discount: '',
  sellerCategId: '',
};

const Step5: React.FC<IStorSetup> = ({ onPrevious }) => {
  const [imageData, setImageData] = useState<
    {
      name: string;
      url: string;
    }[]
  >([]);

  const onSubmit = async (formData: any) => {
    const updatedData = {
      data: { ...formData },
      // convert the value from string to number
      sellerCategId: parseFloat(formData.sellerCategId),
      productImages: imageData,
    };
  };

  const signInSchema = Yup.object().shape({
    name: Yup.string().required('Product name is required'),
    description: Yup.string().required('Product description is required'),
    sellerCategId: Yup.string().required('Product category is required'),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit,
    });

  const handleRmoveImage = (id: string) => {
    if (id) {
      setImageData((prev) => prev.filter((img) => img.name !== id));
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <section className='flex flex-col gap-5'>
          <article className='flex flex-col'>
            <FormInput
              id='name'
              name='name'
              type='text'
              placeholder='Input product Name'
              label='Product Name'
              defaultValue={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
            />
          </article>

          <article className='flex flex-col mt-5'>
            <FormInput
              id='description'
              name='description'
              type='textarea'
              placeholder='Tell us about this product'
              label=' Brief Product Description'
              defaultValue={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description && errors.description}
            />
          </article>
        </section>

        <section className='flex items-center justify-between mt-9'>
          <button onClick={onPrevious} className='outline-btn'>
            PREVIOUS
          </button>{' '}
          <button className='main-btn' type='submit'>
            {'DONE'}
          </button>
        </section>
      </form>
    </main>
  );
};

export default Step5;
