import React from 'react';
import './Checkoutsteps.css';

const CheckoutSteps = ({ currentStep}) => {
  const steps = ['0','1','2','3','4','5'];

  return (
    <div className="checkout-steps">
      {steps.map((step, index) => (
        <div key={step} className={`checkout-step ${currentStep >= index+1 ? 'active' : ''}`}>
          {/* {step} */}
        </div>
      ))}
    </div>
  );
};

export default CheckoutSteps;