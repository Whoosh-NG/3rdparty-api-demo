import { productData } from '@/components/AllData';
import { FaRegClock } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import './style.scss';
import DeliverySetup from '@/components/DeliverySetup';

const Products = () => {
  const params = useParams();

  const renderData = productData.find((item) => item.id === Number(params?.id));

  const { id, deliveryTime, status, productImage, ...productDeets } =
    renderData || {};

  return (
    <main className='container productWrapper py-6 '>
      <Link to='/'>
        <h1 className='text-center pb-4'>Delivery Setup</h1>
      </Link>
      <hr />

      <section className='  flex flex-wrap justify-between gap-3 my-10'>
        <article className='w-full md:w-[40%] bg-[var(--pryColor)] p-4 shadow-md rounded-lg'>
          <figure className='h-[351px] rounded-lg overflow-hidden'>
            <img
              src={renderData?.productImage}
              alt=''
              className='h-full object-cover'
            />
          </figure>

          <div className='p-3 text-[#fff]'>
            <h4 className='font-bold text-[#fff] '>
              {renderData?.name} - ₦{renderData?.value}
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
        </article>

        <aside className='w-full md:w-[58%]'>
          <h3> Enter your delivery information</h3>
          <DeliverySetup productData={productDeets} />
        </aside>
      </section>
    </main>
  );
};

export default Products;
