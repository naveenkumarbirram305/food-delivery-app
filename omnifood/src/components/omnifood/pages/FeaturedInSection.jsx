import React from 'react';
import img1 from '../img/logos/techcrunch.png'
import img2 from '../img/logos/business-insider.png'
import img3 from '../img/logos/the-new-york-times.png'
import img4 from '../img/logos/forbes.png'
import img5 from '../img/logos/usa-today.png';
import './styles/FeaturedInSection.css'

const FeaturedInSection = () => {

    const featuredImages = [
        {
            image: img1,
            alt: 'Tech Crunch Logo'
        },
        {
            image: img2,
            alt: 'Business Inside Logo'
        },
        {
            image: img3,
            alt: 'The New York Times Logo'
        },
        {
            image: img4,
            alt: 'Forbes Logo'
        },
        {
            image: img5,
            alt: 'USA Today Logo'
        },
    ]
  return (
    <section className='section-featured'>
        <div className='container'>
            <h2 className='heading-featured-in'>As featured in</h2>
            <div className='logos'>
                {featuredImages?.map((im, i) => {
                    return (
                        <img key={i} src={im.image} alt={im.alt} />
                    )
                })}
            </div>

        </div>
    </section>
  )
}
export default FeaturedInSection;
