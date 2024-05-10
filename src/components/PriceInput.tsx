/* eslint @typescript-eslint/no-explicit-any: "off" */

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
// import FormInput from './FormInput';

export interface IFormInputProps {
  id: string;
  name?: string;
  error?: string | boolean;
  defaultValue?: number | string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  disabled?: boolean;
}

const PriceInput: React.FC<IFormInputProps> = ({
  defaultValue,
  id,
  name,
  onChange,
  disabled,
}) => {
  const currencyList = ['USD', 'EUR', 'GBP'];

  const [currency, setCurrency] = useState({ toggle: false, value: 'CAD' });

  const changeCurrency = (val: string) => {
    setCurrency({ toggle: !currency.toggle, value: val });
  };

  return (
    <div className=' flex border-[1px] rounded-md relative  '>
      <button
        onClick={() => changeCurrency('CAD')}
        className='bg-black text-white w-6/12 flex justify-center items-center gap-3 font-bold cursor-pointer rounded-tl-md rounded-bl-md'
        disabled={disabled}
      >
        {currency.value} <FaChevronDown />
      </button>

      {currency.toggle && (
        <div className='animate__animated animate__bounceIn absolute top-[50px] w-6/12 bg-black px-4 py-2'>
          {currencyList.map((item, idx) => (
            <p
              key={idx}
              onClick={() => changeCurrency(item)}
              className='text-white font-bold mb-2 cursor-pointer'
            >
              {item}
            </p>
          ))}
        </div>
      )}
      <input
        id={id}
        name={name}
        type='number'
        placeholder='0.0'
        defaultValue={defaultValue}
        onChange={onChange}
        className='w-6/12 currencyInput focus:outline-none !m-0 !py-2 rounded-tr-md rounded-br-md'
        disabled={disabled}
        required
      />

      {/* <FormInput
        id={id}
        name={name}
        type='number'
        placeholder='0.0'
        onChange={onChange}
        defaultValue={defaultValue}
        onBlur={onBlur}
        error={error}
      /> */}
    </div>
  );
};

export default PriceInput;
