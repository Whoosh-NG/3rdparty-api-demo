import { Link } from 'react-router-dom';
import './SubscribeForm.scss';
import succ from '@/assets/success.gif';

const SuccessComp = () => {
  return (
    <main className='subPage'>
      <section className={`container  pageContent   flex flex-col`}>
        <figure className='w-full md:w-4/12 mx-auto'>
          <img src={succ} alt='' />
        </figure>
        <p className={`w-full md:w-7/12 mx-auto text-center my-5 success `}>
          Congratulations 🎉 Champ! Your order has been placed successfully.
        </p>

        {/* <section className='my-5'>
            <h5> Order Details:</h5>

            <div className='flex items-center gap-2'>
              <p>Delivery fee:</p>
              <h4>₦ {formatNumInThousands(delivery_fee)}</h4>
            </div>
            <div className='flex items-center gap-2'>
              <p>Vat:</p>
              <h4> ₦ {formatNumInThousands(vat)} </h4>
            </div>
            <hr />
            <div className='flex items-center gap-2'>
              <p>Total:</p>
              <h4>₦ {formatNumInThousands(total)} </h4>
            </div>
          </section> */}

        <div className='text-center my-4'>
          <Link className='main-btn' to='/'>
            Go Back Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SuccessComp;
