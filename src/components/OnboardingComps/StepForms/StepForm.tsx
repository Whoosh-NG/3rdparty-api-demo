import { useState } from 'react';
import StepFormLabel from './StepFormLabel';

import {
  PiNumberCircleOne,
  PiNumberCircleTwo,
  PiNumberCircleThree,
} from 'react-icons/pi';
import Step2 from './Step2/Step2';
import Step4 from './Step4/Step4';
import DeliverySetup from '@/components/DeliverySetup';

const StepForm = ({ data }: { data: any }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const StepLabels = [
    { title: 'Step1', icon: <PiNumberCircleOne /> },
    {
      title: 'Step2',
      icon: <PiNumberCircleTwo />,
    },
    { title: 'Step3', icon: <PiNumberCircleThree /> },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <main className='onboaringStepForm flex flex-col  justify-between '>
      <aside className=' '>
        <StepFormLabel stepLabels={StepLabels} currentStep={currentStep} />
      </aside>
      <section className=' '>
        <article className='my-[60px]'>
          {currentStep === 0 && <Step2 onNext={handleNext} />}
          {currentStep === 1 && (
            <DeliverySetup
              onPrevious={handlePrevious}
              onNext={handleNext}
              productData={data}
            />
          )}
          {currentStep === 2 && <Step4 onPrevious={handlePrevious} />}
        </article>
      </section>
    </main>
  );
};

export default StepForm;
