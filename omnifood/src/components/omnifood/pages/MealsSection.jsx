import React from 'react';
import './styles/MealsSection.css';
import image1 from '../img/meals/meal-1.jpg';
import image2 from '../img/meals/meal-2.jpg';

const MealItem = ({ image, alt, tags, title, calories, nutriScore, rating, ratingCount }) => {
    return (
        <div className='meal'>
            <img className='meal-img' src={image} alt={alt} />
            <div className='meal-container'>
                <div className='meal-tags'>
                    {tags.map((tag, index) => (
                        <span key={index} className={`tag tag--${tag.toLowerCase()}`}>{tag}</span>
                    ))}
                </div>
                <p className='meal-title'>{title}</p>
                <ul className='meal-attributes'>
                    <li className='meal-attribute'><ion-icon class="meal-icon" name="flame-outline"></ion-icon><span><strong>{calories}</strong> calories</span></li>
                    <li className='meal-attribute'><ion-icon class="meal-icon" name="restaurant-outline"></ion-icon> <span>NutriScore &reg; <strong>{nutriScore}</strong></span></li>
                    <li className='meal-attribute'><ion-icon class="meal-icon" name="star-half-outline"></ion-icon> <span><strong>{rating}</strong> rating({ratingCount})</span></li>
                </ul>
            </div>
        </div>
    );
};

const DietList = () => {
    const diets = [
        'Vegetarian', 'Vegan', 'Pescatarian', 'Gluten-free', 'Lactose-free',
        'Keto', 'Paleo', 'Low FODMAP', 'Kid-friendly'
    ];

    return (
        <div className='diets'>
            <h3 className='heading-tertiory'>Works with any diet:</h3>
            <ul className='list'>
                {diets.map((diet, index) => (
                    <li key={index} className='list-item'>
                        <ion-icon class='list-icon' name="checkmark-outline"></ion-icon>
                        <span>{diet}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const MealsSection = () => {
    const mealItems = [
        {
            image: image1,
            alt: 'Japanese',
            tags: ['Vegetarian'],
            title: 'Japanese Gyozas',
            calories: 650,
            nutriScore: 74,
            rating: 4.9,
            ratingCount: 537
        },
        {
            image: image2,
            alt: 'Japanese',
            tags: ['Vegan', 'Paleo'],
            title: 'Avocado Salad',
            calories: 400,
            nutriScore: 92,
            rating: 4.9,
            ratingCount: 441
        }
    ];

    return (
        <div>
            <section className='section-meals' id='meals'>
                <div className='container center-text'>
                    <span className='subheading'>Meals</span>
                    <h2 className='heading-secondary'>Omnifood AI chooses from 5,000+ recipes</h2>
                </div>
                <div className='container grid grid--3-cols margin-bottom-md'>
                    {mealItems.map((item, index) => (
                        <MealItem key={index} {...item} />
                    ))}
                    <DietList />
                </div>
                <div className='container all-recipes'>
                    <a href="#" className='link'>See all recipes &rarr;</a>
                </div>
            </section>
        </div>
    );
};

export default MealsSection;
