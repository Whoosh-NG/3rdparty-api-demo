import { useState } from 'react';
import StepFormLabel from './StepFormLabel';

import {
  PiNumberCircleOne,
  PiNumberCircleTwo,
  PiNumberCircleThree,
  PiNumberCircleFour,
  PiNumberCircleFive,
} from 'react-icons/pi';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from './Step4/Step4';
import Step5 from './Step5/Step5';

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const StepLabels = [
    { title: 'Step1', icon: <PiNumberCircleOne /> },
    {
      title: 'Step2',
      icon: <PiNumberCircleTwo />,
    },
    { title: 'Step3', icon: <PiNumberCircleThree /> },
    { title: 'Step4', icon: <PiNumberCircleFour /> },
    { title: 'Step5', icon: <PiNumberCircleFive /> },
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
          {currentStep === 0 && <Step1 onNext={handleNext} />}
          {currentStep === 1 && (
            <Step2 onPrevious={handlePrevious} onNext={handleNext} />
          )}
          {currentStep === 2 && (
            <Step3 onPrevious={handlePrevious} onNext={handleNext} />
          )}
          {currentStep === 3 && (
            <Step4 onPrevious={handlePrevious} onNext={handleNext} />
          )}
          {currentStep === 4 && <Step5 onPrevious={handlePrevious} />}
        </article>
      </section>
    </main>
  );
};

export default StepForm;
