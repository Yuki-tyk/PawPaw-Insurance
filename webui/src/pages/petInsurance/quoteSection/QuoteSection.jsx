import { useState } from 'react';
import './QuoteSection.css';

export default function QuoteSection() {
    const [petType, setPetType] = useState('dog');
    const [petGender, setPetGender] = useState('male');

    function handlePetClick(pet) {
        setPetType(pet);
    }

    function handlePetGenderClick(gen) {
        setPetGender(gen);
    }

    return (
        <div id='quote-section'>
            <h2 id='quote-header'>Enter your pet's info to get a quote instantly</h2>
            <form id='quote-form'>
                <div id='quote-form-left'>
                    <div id='pet-type'>
                        <div className={'quote-form-choice ' + (petType === 'dog' ? 'selected' : '')} 
                            onClick={() => {handlePetClick('dog')}}>
                            <div className='i-container'>
                                <i className="fa-solid fa-dog fa-2xl dog"></i>
                            </div>
                            <p>Dog</p>
                        </div>
                        <div className={'quote-form-choice ' + (petType === 'cat' ? 'selected' : '')} 
                            onClick={() => {handlePetClick('cat')}}>
                            <div className='i-container'>
                                <i className="fa-solid fa-cat fa-2xl cat"></i>
                            </div>
                            <p>Cat</p>
                        </div>
                    </div>

                    <div id='gender'>
                        <div className={'quote-form-choice ' + (petGender === 'male' ? 'selected' : '')} 
                            onClick={() => {handlePetGenderClick('male')}}>
                            <div className='i-container'>
                                <i className="fa-solid fa-mars fa-2xl male"></i>
                            </div>
                            <p>Male</p>
                        </div>
                        
                        <div className={'quote-form-choice ' + (petGender === 'female' ? 'selected' : '')} 
                            onClick={() => {handlePetGenderClick('female')}}>
                            <div className='i-container'>
                                <i className="fa-solid fa-venus fa-2xl female"></i>
                            </div>
                            <p>Female</p>
                        </div>
                    </div>
                </div>
                <div id='quote-form-right'>
                    <input type='text' id='pet-name' placeholder='Pet Name'/>
                    <input type='text' id='pet-age' placeholder='Pet Age' required/>
                    <input type='text' id='pet-breed' placeholder='Pet Breed' required/>
                </div>
            </form>
        </div>
    )
}
