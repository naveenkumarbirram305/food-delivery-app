import React from 'react';
import './styles/PricingSection.css';

const PlanDetail = ({ icon, title, text }) => (
  <div className='feature'>
    <ion-icon class='feature-icon' name={`${icon}-outline`}></ion-icon>
    <p className='feature-title'>{title}</p>
    <p className='feature-text'>{text}</p>
  </div>
);

const PricingPlan = ({ name, price, mealCount, orderDetails, access }) => (
  <div className={`pricing-plan pricing-plan--${name.toLowerCase()}`}>
    <header className='plan-header'>
      <p className='plan-name'>{name}</p>
      <p className='plan-price'><span>$</span>{price}</p>
      <p className='plan-text'>per month. That's just ${price === '999' ? '13' : '11'} per meal!</p>
    </header>
    <ul className='list'>
      <li className='list-item'>
        <ion-icon class='list-icon' name="checkmark-outline"></ion-icon>
        <span>{mealCount}</span>
      </li>
      {orderDetails.map((detail, index) => (
        <li className='list-item' key={index}>
          <ion-icon class='list-icon' name="checkmark-outline"></ion-icon>
          <span>{detail}</span>
        </li>
      ))}
    </ul>
    {access && (
      <div className="plan-sign-up">
        <a href="#" className='btn btn--full'>Start eating well</a>
      </div>
    )}
  </div>
);

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "999",
      mealCount: "1 meal per day",
      orderDetails: [
        'Order from 11am to 9pm',
        'Delivery is free',
        'Not available for 24/7 ordering'
      ],
      access: true
    },
    {
      name: "Complete",
      price: "649",
      mealCount: "2 meals per day",
      orderDetails: [
        'Order 24/7',
        'Delivery is free',
        'Get access to latest recipes'
      ],
      access: true
    }
  ];

  const features = [
    {
      icon: "infinite",
      title: "Never cook again!",
      text: "Our subscriptions cover 365 days per year, even including major holidays."
    },
    {
      icon: "nutrition",
      title: "Local and organic",
      text: "Our cooks only use local, fresh, and organic products to prepare your meals."
    },
    {
      icon: "leaf",
      title: "No waste",
      text: "All our partners only use reusable containers to package all your meals."
    },
    {
      icon: "pause",
      title: "Pause anytime",
      text: "Going on vacation? Just pause your subscription, and we refund unused days."
    }
  ];

  return (
    <div className='pricing-section' id='pricing'>
      <div className='container'>
        <section className='section-pricing'>
          <span className='subheading'>Pricing</span>
          <h2 className='heading-secondary'>Eating well without breaking the bank</h2>
        </section>
      </div>

      <div className='container grid grid--2-cols margin-bottom-md'>
        {plans.map((plan, index) => (
          <PricingPlan key={index} {...plan} />
        ))}
      </div>

      <div className='container grid'>
        <aside className='plan-details'>
          Prices include all applicable taxes. You can cancel at any time. Both plans include the following
        </aside>
      </div>

      <div className='container grid grid--4-cols'>
        {features.map((feature, index) => (
          <PlanDetail key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
