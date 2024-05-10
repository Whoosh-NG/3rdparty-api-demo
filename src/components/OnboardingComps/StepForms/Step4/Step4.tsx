import React, { useState } from 'react';
import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import ProductCatCard from './ProductCatCard';
import StepFormHeader from '../StepFormHeader';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import {
  SelectStepperForms,
  updateIsAdded,
  updateProductCat,
} from '@/Redux/Features/onboardingSlice';
import {
  useAddSellerProductCatMutation,
  useGetSubCategoryListQuery,
  // useGetSellerCatQuery,
} from '@/api/apiSlice';
import Spinner from '@/spinner/Spinner';
import { useSweetAlert } from '@/Hooks/useSweetAlert';
import { Skeleton } from 'antd';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import ErrorMessage from '@/components/ErrorMessage';

const Step4: React.FC<IStepForm> = ({ onNext, onPrevious }) => {
  const { storeSetup, storeProductCats, productCatIsAdded } =
    useAppSelector(SelectStepperForms);

  const dispatch = useAppDispatch();
  const { showAlert } = useSweetAlert();
  const { errors, setErrors } = useGlobalHooks();

  const [addCat, { isLoading: adding }] = useAddSellerProductCatMutation({});

  const { data, isLoading } = useGetSubCategoryListQuery(
    storeSetup?.vendaCategoryId,
  );

  const [state, setState] = useState<{
    isAdded: { [key: string]: boolean };
    productCat: {
      subCategoryId: number;
      // name: string
    }[];
  }>({ isAdded: productCatIsAdded || {}, productCat: storeProductCats || [] });

  const handleAddProdCat = (id: number) => {
    setState((prev) => {
      // Check if the category has been added already
      const isAlreadyAdded = prev.productCat.some(
        (cat) => cat.subCategoryId === id,
      );
      let updateProductCat;

      if (isAlreadyAdded) {
        // if already there, filter it out
        updateProductCat = prev.productCat.filter(
          (cat) => cat.subCategoryId !== id,
        );
      } else {
        updateProductCat = [...prev.productCat, { subCategoryId: id }];
      }
      return {
        ...prev,

        isAdded: { ...prev.isAdded, [id]: !prev.isAdded[id] },
        productCat: updateProductCat,
      };
    });
  };

  console.log(state);

  const handleSubmit = async () => {
    dispatch(updateIsAdded(state.isAdded));
    dispatch(updateProductCat(state.productCat));

    if (state.productCat.length === 0) {
      setErrors({ error: true, errMessage: 'Please your product categories' });
      return;
    }
    try {
      const rsp = await addCat({
        categories: state.productCat,
      });

      if ('data' in rsp) {
        showAlert(rsp?.data?.message);
        onNext();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <ul className='flex flex-wrap gap-3 justify-between'>
        {Array.from({ length: 9 }).map((_, idx) => (
          <div
            key={idx}
            className={`productCatCard flex flex-col items-center justify-between overflow-hidden`}
          >
            <figure className='animate__animated animate__bounceIn animate__slow w-[60px] h-[60px] mx-auto p-[15px]'>
              <Skeleton.Avatar />
            </figure>
            <div className='mt-5'>
              <p className='animate__animated  animate__bounceInRight'>
                <Skeleton.Input />
              </p>

              <Skeleton.Button />
            </div>
          </div>
        ))}
      </ul>
    );
  }

  return (
    <main className='productCatContainer'>
      <StepFormHeader
        title='Create Your Product Category'
        subTitle='Select categories of your offerings'
      />

      <ul className='flex flex-wrap gap-3'>
        {data?.category?.map(
          (
            {
              id,
              subName,
              image,
            }: {
              id: number;
              subName: string;
              image: string;
            },
            idx: number,
          ) => (
            <li key={id} className={`w-full md:w-[45%] lg:w-[23%]`}>
              <ProductCatCard
                id={id}
                title={subName}
                imageUrl={image}
                styleId={idx % 2 === 0 ? 'coldDrinks' : 'hotDrinks'}
                action={() => handleAddProdCat(id)}
                actionTitle={state?.isAdded[id] ? 'ADDED' : 'ADD TO CATEGORY'}
              />
            </li>
          ),
        )}
      </ul>

      <div className='flex justify-center mt-5'>
        {errors.error && <ErrorMessage message={errors.errMessage} />}
      </div>

      <section className='flex flex-wrap gap-3 items-center justify-between mt-9'>
        <button onClick={onPrevious} className='outline-btn'>
          PREVIOUS
        </button>{' '}
        <button
          onClick={handleSubmit}
          className='main-btn'
          disabled={Object.keys(state?.isAdded).length === 0}
        >
          {adding ? <Spinner /> : 'SAVE AND CONTINUE'}
        </button>
      </section>
    </main>
  );
};

export default Step4;
