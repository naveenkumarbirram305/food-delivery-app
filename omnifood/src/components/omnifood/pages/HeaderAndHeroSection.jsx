import React from 'react'
import logoImage from '../img/omnifood-logo.png'
import heroImg from '../img/hero.png';
import customer1 from '../img/customers/customer-1.jpg'
import customer2 from '../img/customers/customer-2.jpg'
import customer3 from '../img/customers/customer-3.jpg'
import customer4 from '../img/customers/customer-4.jpg'
import customer5 from '../img/customers/customer-5.jpg'
import customer6 from '../img/customers/customer-6.jpg'
import './styles/HeaderAndHeroSection.css'
const HeaderAndHeroSection = () => {

  const toggleNavList = () => {
    const headerEl = document.querySelector('.header');
    // toggleEl = document.querySelector('.btn-mobile-nav');
    headerEl.classList.toggle('nav-open');
  }
    return (
        <div>
            <header className='header sticky'>
                <img className='logo' src={logoImage} alt="logo" />
                <nav className='main-navigation'>
                    <ul className='main-nav-list'>
                        <li><a className='main-nav-link' href="#howItworks">How It works</a></li>
                        <li><a className='main-nav-link' href="#meals">Meals</a></li>
                        <li><a className='main-nav-link' href="#testimonials">Testimonials</a></li>
                        <li><a className='main-nav-link' href="#pricing">Pricing</a></li>
                        <li><a className='main-nav-link nav-cta' href="#cta">Try for free</a></li>
                    </ul>
                </nav>
                <button className='btn-mobile-nav' onClick={toggleNavList}>
                    <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
                    <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
                </button>
            </header>
            <section className='section-hero'>
                <div className="hero">
                    <div className='hero-text-box'>
                        <h1 className='heading-primary'>A healthy meal delivered to your door, every single day</h1>
                        <p className='hero-description'>
                            The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. We have delivered 250,000+ meals last year!
                        </p>
                        <a href="#cta" className='btn btn--full margin-right-sm'>Start eating well</a>
                        <a href="#howItworks" className='btn btn--outline'>Learn More &darr;</a>
                        <div className='delivered-meals'>
                            <div className='delivered-imgs'>
                                <img src={customer1} alt="Customers" />
                                <img src={customer2} alt="Customers" />
                                <img src={customer3} alt="Customers" />
                                <img src={customer4} alt="Customers" />
                                <img src={customer5} alt="Customers" />
                                <img src={customer6} alt="Customers" />
                            </div>
                            <p className='delivered-text'><span>250,000+</span>  meals delivered last year!</p>
                        </div>
                    </div>
                    <div className='hero-img-box'>
                        <img src={heroImg} className="hero-img" alt="women eating food" />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HeaderAndHeroSection;
