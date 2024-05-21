import React from 'react';
import './styles/CTAandFooter.css';
import logo from '../img/omnifood-logo.png';

const FormField = ({ labelFor, label, type, placeholder, required }) => {
    return (
        <div>
            <label htmlFor={labelFor}>{label}</label>
            <input id={labelFor} type={type} placeholder={placeholder} required={required} />
        </div>
    );
};

const SocialLink = ({ iconName }) => {
    return (
        <li>
            <a className="footer-link" href="#">
                <ion-icon class="social-icon" name={iconName}></ion-icon>
            </a>
        </li>
    );
};

const FooterNav = ({ heading, links }) => {
    return (
        <nav className="nav-col">
            <p className="footer-heading">{heading}</p>
            <ul className="footer-nav">
                {links.map((link, index) => (
                    <li key={index}>
                        <a className="footer-link" href={link.url}>
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const CTASection = () => {
    return (
        <section className="section-cta" id='cta'>
            <div className="container">
                <div className="cta">
                    <div className="cta-text-box">
                        <h2 className="heading-secondary">Get your first meal for free!</h2>
                        <p className="cta-text">
                            Healthy, tasty and hassle-free meals are waiting for you. Start
                            eating well today. You can cancel or pause anytime. And the
                            first meal is on us!
                        </p>

                        <form className="cta-form" action="#">
                            <FormField
                                labelFor="full-name"
                                label="Full Name"
                                type="text"
                                placeholder="John Smith"
                                required
                            />
                            <FormField
                                labelFor="email"
                                label="Email address"
                                type="email"
                                placeholder="me@example.com"
                                required
                            />
                            <div>
                                <label htmlFor="select-where">Where did you hear from us?</label>
                                <select id="select-where" required>
                                    <option value="">Please choose one option:</option>
                                    <option value="friends">Friends and family</option>
                                    <option value="youtube">YouTube video</option>
                                    <option value="podcast">Podcast</option>
                                    <option value="ad">Facebook ad</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            <button className="btn btn--form">Sign up now</button>
                        </form>
                    </div>
                    <div
                        className="cta-img-box"
                        role="img"
                        aria-label="Woman enjoying food"
                    ></div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const socialLinks = [
        { iconName: 'logo-instagram' },
        { iconName: 'logo-facebook' },
        { iconName: 'logo-twitter' },
    ];

    const accountLinks = [
        { url: '#', text: 'Create account' },
        { url: '#', text: 'Sign in' },
        { url: '#', text: 'iOS app' },
        { url: '#', text: 'Android app' },
    ];

    const companyLinks = [
        { url: '#', text: 'About Omnifood' },
        { url: '#', text: 'For Business' },
        { url: '#', text: 'Cooking partners' },
        { url: '#', text: 'Careers' },
    ];

    const resourceLinks = [
        { url: '#', text: 'Recipe directory' },
        { url: '#', text: 'Help center' },
        { url: '#', text: 'Privacy & terms' },
    ];

    return (
        <footer className="footer">
            <div className="container grid grid--footer">
                <div className="logo-col">
                    <a href="#" className="footer-logo">
                        <img className="logo" alt="Omnifood logo" src={logo} />
                    </a>

                    <ul className="social-links">
                        {socialLinks.map((link, index) => (
                            <SocialLink key={index} iconName={link.iconName} />
                        ))}
                    </ul>

                    <p className="copyright">
                        Copyright &copy; {new Date().getFullYear()} by Omnifood, Inc. All rights reserved.
                    </p>
                </div>

                <div className="address-col">
                    <p className="footer-heading">Contact us</p>
                    <address className="contacts">
                        <p className="address">
                            623 Harrison St., 2nd Floor, San Francisco, CA 94107
                        </p>
                        <p>
                            <a className="footer-link" href="tel:415-201-6370">415-201-6370</a>
                            <br />
                            <a className="footer-link" href="mailto:hello@omnifood.com">
                                hello@omnifood.com
                            </a>
                        </p>
                    </address>
                </div>
                <FooterNav heading="Account" links={accountLinks} />
                <FooterNav heading="Company" links={companyLinks} />
                <FooterNav heading="Resources" links={resourceLinks} />
            </div>
        </footer>
    );
};

const CTAandFooter = () => {
    return (
        <div>
            <CTASection />
            <Footer />
        </div>
    );
};

export default CTAandFooter;

