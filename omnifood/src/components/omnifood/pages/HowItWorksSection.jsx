import React from 'react';
import phone1 from '../img/app/app-screen-1.png';
import phone2 from '../img/app/app-screen-2.png';
import phone3 from '../img/app/app-screen-3.png';
import './styles/HowItWorksSection.css';


const HowItWorksSection = () => {
    const steps = [
        {
            number: '01',
            heading: 'Tell us what you like (and what not)',
            description: 'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!',
            image: phone1,
            alt: 'screen to select preferences'
        },
        {
            number: '02',
            heading: 'Approve your weekly meal plan',
            description: 'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
            image: phone2,
            alt: 'Meal Approving plan'
        },
        {
            number: '03',
            heading: 'Receive meals at convenient time',
            description: 'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!',
            image: phone3,
            alt: 'delivery screen'
        }
    ];

    return (
        <div>
            <section className='section-how' id='howItworks'>
                <div className='container'>
                    <span className='subheading'>How it works</span>
                    <h2 className='heading-secondary'>Your daily dose of health in 3 simple steps</h2>
                </div>
                <div className='container grid grid--2-cols grid--center-v'>
                    {steps.map((step, index) => (
                        <>
                            {index % 2 === 0 ? (
                                <>
                                    <div className='step-text-box'>
                                        <p className='step-number'>{step.number}</p>
                                        <h3 className='heading-tertiory'>{step.heading}</h3>
                                        <p className='step-description'>{step.description}</p>
                                    </div>
                                    <div className='step-img-box'>
                                        <img className='step-img' src={step.image} alt={step.alt} />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='step-img-box'>
                                        <img className='step-img' src={step.image} alt={step.alt} />
                                    </div>
                                    <div className='step-text-box'>
                                        <p className='step-number'>{step.number}</p>
                                        <h3 className='heading-tertiory'>{step.heading}</h3>
                                        <p className='step-description'>{step.description}</p>
                                    </div>
                                </>
                            )}
                        </>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HowItWorksSection;
