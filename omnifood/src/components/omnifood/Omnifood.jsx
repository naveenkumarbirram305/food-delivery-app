import React from 'react';
import HowItWorksSection from './pages/HowItWorksSection';
import FeaturedInSection from './pages/FeaturedInSection';
import MealsSection from './pages/MealsSection';
import HeaderAndHeroSection from './pages/HeaderAndHeroSection';
import Testimonials from './pages/Testimonials';
import PricingSection from './pages/PricingSection';
import CTAandFooter from './pages/CTAandFooter';
import './Omnifood.css'
import './Queries.css'

const Omnifood = () => {
    return (
        <div className='omnifood-body'>
            <HeaderAndHeroSection/>
            <FeaturedInSection/>
            <HowItWorksSection/>
            <MealsSection/>
            <Testimonials/>
            <PricingSection/>
            <CTAandFooter/>
        </div>
    )
}

export default Omnifood
