import React from 'react';
import cake from '@/assets/cake.png';

interface IProductCatCard {
  id: number;
  styleId: string;
  title: string;
  action: (id: number) => void;
  actionTitle: string;
  imageUrl: string;
}

const ProductCatCard: React.FC<IProductCatCard> = ({
  id,
  title,
  styleId,
  action,
  actionTitle,
  imageUrl,
}) => {
  return (
    <div
      id={styleId}
      className={`productCatCard flex flex-col items-center justify-between overflow-hidden`}
    >
      <figure className='animate__animated animate__bounceIn animate__slow w-[60px] h-[60px] mx-auto p-[15px]'>
        <img src={imageUrl ? imageUrl : cake} alt='' />
      </figure>
      <div className='mt-5'>
        <p className='animate__animated  animate__bounceInRight'>{title}</p>

        <button
          onClick={() => action(id)}
          className='actionBtn mt-2 animate__animated  animate__bounceInLeft'
        >
          {' '}
          {actionTitle}{' '}
        </button>
      </div>
    </div>
  );
};

export default ProductCatCard;
