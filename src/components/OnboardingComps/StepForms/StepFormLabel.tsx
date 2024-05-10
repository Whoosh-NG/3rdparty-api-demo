import React, { ReactNode } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface Ilabels {
  stepLabels: { title: string; icon?: ReactNode }[];
  currentStep: number;
}

const StepFormLabel: React.FC<Ilabels> = ({ stepLabels, currentStep }) => {
  return (
    <ul className='stepLabels flex justify-between border-b-[1px]'>
      {stepLabels.map(({ title, icon }, index: number) => (
        <li
          key={index}
          className={`step-label mb-3 ${
            index === currentStep ? 'stepFormActive' : 'stepFormInActive'
          }`}
        >
          {index < currentStep ? (
            <div className='w-full'>
              <h4 className='flex items-center gap-1 !text-[var(--pryColor)]'>
                <FaCheckCircle className='' />
                {title}
                {/* <div className='w-[30px] h-[2px] bg-[var(--secColor)] mt-1'></div> */}
              </h4>
            </div>
          ) : (
            <h4 className='flex items-center gap-2'>
              {icon} {title}{' '}
            </h4>
          )}
          {/* {index !== stepLabels.length - 1 && (
              <FaAngleRight className='angle-right-icon' />
            )} */}
        </li>
      ))}
    </ul>
  );
};

export default StepFormLabel;
