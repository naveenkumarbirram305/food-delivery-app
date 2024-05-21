import React from 'react';
import image1 from '../img/customers/dave.jpg';
import image2 from '../img/customers/ben.jpg';
import image3 from '../img/customers/steve.jpg';
import image4 from '../img/customers/hannah.jpg';

import gallery1 from '../img/gallery/gallery-1.jpg';
import gallery2 from '../img/gallery/gallery-2.jpg';
import gallery3 from '../img/gallery/gallery-3.jpg';
import gallery4 from '../img/gallery/gallery-4.jpg';
import gallery5 from '../img/gallery/gallery-5.jpg';
import gallery6 from '../img/gallery/gallery-6.jpg';
import gallery7 from '../img/gallery/gallery-7.jpg';
import gallery8 from '../img/gallery/gallery-8.jpg';
import gallery9 from '../img/gallery/gallery-9.jpg';
import gallery10 from '../img/gallery/gallery-10.jpg';
import gallery11 from '../img/gallery/gallery-11.jpg';
import gallery12 from '../img/gallery/gallery-12.jpg';
import './styles/Testimonials.css';

const Testimonials = () => {
    const testimonialsData = [
        {
            name: 'Dave Bryson',
            image: image1,
            text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical."
        },
        {
            name: 'Ben Hadley',
            image: image2,
            text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!"
        },
        {
            name: 'Steve Miller',
            image: image3,
            text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!"
        },
        {
            name: 'Hannah Smith',
            image: image4,
            text: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic."
        }
    ];

    const galleryItems = [
        gallery1, gallery2, gallery3, gallery4,
        gallery5, gallery6, gallery7, gallery8,
        gallery9, gallery10, gallery11, gallery12
    ];

    return (
        <section className='section-testimonials' id='testimonials'>
            <div className='testimonial-container'>
                <span className='subheading'>Testimonials</span>
                <h2 className='heading-secondary'>Once you try it, you can't go back</h2>
                <div className='testimonials'>
                    {testimonialsData.map((testimonial, index) => (
                        <figure key={index} className='testimonial'>
                            <img className='testimonial-image' src={testimonial.image} alt={`Photo of ${testimonial.name}`} />
                            <blockquote className='testimonial-text'>{testimonial.text}</blockquote>
                            <p className='testimonial-name'>&mdash; {testimonial.name}</p>
                        </figure>
                    ))}
                </div>
            </div>
            <div className='gallery'>
                {galleryItems.map((item, index) => (
                    <figure key={index} className='gallary-item'>
                        <img src={item} alt={`gallery-${index + 1}`} />
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
