import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const AddToCartBtn = () => {
  const [count, setCount] = useState(0);

  const handleCount = (id: string) => {
    if (id === 'add') {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <section className='addToCartBtn flex gap-5 items-center'>
      <button
        id='add'
        onClick={() => handleCount('minus')}
        disabled={count === 0}
      >
        {' '}
        <FaMinus />{' '}
      </button>
      <p> {count} </p>
      <button onClick={() => handleCount('add')}>
        {' '}
        <FaPlus />{' '}
      </button>
    </section>
  );
};

export default AddToCartBtn;
