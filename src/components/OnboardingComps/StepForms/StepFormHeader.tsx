import React from 'react';

interface IHeader {
  title: string;
  subTitle: string;
}

const StepFormHeader: React.FC<IHeader> = ({ title, subTitle }) => {
  return (
    <header className='mb-10'>
      <h1>{title} </h1>
      <p className='my-3'>{subTitle} </p>
    </header>
  );
};

export default StepFormHeader;
