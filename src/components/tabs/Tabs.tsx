import React from 'react';
import './tabs.css';

type Props = {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const Tabs = ({currentStep, setCurrentStep}: Props) => {
    const steps = [
        {number: 1, text: 'Document Scanner', icon: 'tab-1.svg'},
        {number: 2, text: 'Sing & Stamp', icon: 'tab-2.svg'},
        {number: 3, text: 'Batch Scanning', icon: 'tab-3.svg'},
        {number: 4, text: 'Advanced Filters', icon: 'tab-4.svg'},
        {number: 5, text: 'Export & Share', icon: 'tab-5.svg'},
    ];

    return (
        <div className='steps'>
            {steps?.map((step) => (
                <div key={step.number} onClick={() => {
                         setCurrentStep(step.number);
                     }}
                     className={`tab-item ${currentStep === step.number ? 'active' : ''}`}>
                    <div className={`tab-list`}>
                        <div className="loader">
                            <div className="lds-ring">
                                <div></div>
                            </div>
                        </div>
                        <div className="tab-icon-holder">
                            <img src={step.icon} alt={`Tab ${step.number}`} className="tab-icon" />
                        </div>
                        <span className='tab-span' >{step.text}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tabs;
