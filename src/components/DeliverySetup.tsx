import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppSelector } from '@/Redux/reduxHooks';
import FormInput from '@/components/FormInput';
import { SelectStepperForms } from '@/Redux/Features/onboardingSlice';
import { useState } from 'react';
import { selectGlobal } from '@/Redux/Features/globalSlice';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import Success from './success/Success';

interface IOrder {
  delivery_fee: number;
  vat: number;
  total: number;
}

export const baseUrl = 'https://staging.whooshing.xyz/api/v1';

const DeliverySetup = ({ productData }: any) => {
  const show = useAppSelector(selectGlobal);
  const { handleShow } = useGlobalHooks();

  const [loading, setLoading] = useState(false);
  const { dropoffDetails } = useAppSelector(SelectStepperForms);
  const reduxStoreetup =
    Object.keys(dropoffDetails).length > 0 && dropoffDetails;

  const initialValues = reduxStoreetup || {
    first_name: '',
    last_name: '',
    phone_number: '',
    dropoff_address: '',
    latitude: ' ',
    longitude: ' ',
  };

  const APIKey = import.meta.env.VITE_API_KEY;
  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

  const getAddressLognLat = async (address: string) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address,
        )}&key=${APIKey}`,
      );
      const data = await response.json();

      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        const latitude = location.lat;
        const longitude = location.lng;

        // console.log('Longitude:', longitude);
        // console.log('Latitude:', latitude);

        return { latitude, longitude };
      } else {
        throw new Error('Geocoding failed');
      }
    } catch (error) {
      console.error('Error retrieving location:', error);
      throw error;
    }
  };

  const pickup_details = {
    first_name: 'Whoosh',
    last_name: 'API Test',
    phone_number: '0703422322',
    pickup_address: '38, Alhaja Kofoworola Street, Off Awolowo Way, Ikeja',
    latitude: '6.6075419',
    longitude: '3.3498675',
  };
  const [orderedData, setOrderedData] = useState<IOrder>({} as IOrder);

  const onSubmit = async (formData: any) => {
    setLoading(true);

    // get address longitude and latitude
    const rsp = await getAddressLognLat(formData.dropoff_address);

    const dataToSendToSever = {
      order_type: 'Receive/Send',
      send_receive_option: 'I am the Receiver',
      delivery_type: 'Instant',
      pickup_details,
      dropoff_details: {
        ...formData,
        latitude: rsp?.latitude,
        longitude: rsp?.longitude,
      },
      order_items: [productData],
    };

    try {
      const response = await fetch(
        `${baseUrl}/user/order/send-receive/create`,
        {
          method: 'POST',
          body: JSON.stringify(dataToSendToSever),

          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        return errorData;
      }

      const data = await response.json();

      setOrderedData(data?.data);
      handleShow('success');
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
    <>
      <form className='deliverySetup' onSubmit={handleSubmit}>
        <article className=' my-5'>
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
                id='dropoff_address'
                name='dropoff_address'
                type='text'
                label='Pickup Address'
                placeholder='input your response here'
                onChange={handleChange}
                defaultValue={values.dropoff_address}
                onBlur={handleBlur}
                error={touched.dropoff_address && errors.dropoff_address}
              />
            </article>
          </section>
        </article>

        <section className='flex items-center justify-between mt-9'>
          <button disabled={loading} className='main-btn' type='submit'>
            {loading ? 'Processing...' : 'Buy Now'}
          </button>
        </section>
      </form>

      {show['success'] && (
        <Success
          id='success'
          close={() => handleShow('success')}
          delivery_fee={orderedData?.delivery_fee}
          vat={orderedData?.vat}
          total={orderedData?.total}
        />
      )}
    </>
  );
};

export default DeliverySetup;
