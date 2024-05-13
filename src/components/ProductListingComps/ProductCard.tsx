import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import pic1 from '@/assets/productImg.png';
import { Link } from 'react-router-dom';

// interface IProduct {
//   title: string;
//   productImage: string;
//   productStatus: string;
//   price: number;
//   description: string;
//   deliveryTime: string;
// }
interface IProduct {
  id: number;
  title: string;
  productImage?: string;
  price: string;
  description: string;
}

const ProductCard: React.FC<IProduct> = ({
  id,
  title,
  productImage,
  price,
  description,
}) => {
  return (
    <div className='overflow-hidden rounded-lg bg-[var(--white)]'>
      <Link to={`products/${id}`}>
        <figure className='h-[151px]'>
          <img
            src={productImage ? productImage : pic1}
            alt={title}
            className='h-full object-cover'
          />
        </figure>

        <div className='p-3'>
          <h4 className='font-bold text-[#2B2B43] '>
            {title} - ₦{price}
          </h4>
          <p className='my-4 text-[var(--Grey6)] font-semibold'>
            {description}
          </p>
          <hr />

          <div className='flex justify-between items-center'>
            <button className='bg-[#EDEEF2] py-[4px] px-[10px] rounded-full text-[14px] text-[var(--Grey2)] main-btn'>
              Buy Now
            </button>
            <p className='text-[var(--pryColor)] text-[10px] flex gap-2 items-center font-semibold mt-1'>
              {' '}
              Delivery in <FaRegClock /> 30-40 mins
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
