import './Hero.css';
import QuoteTable from './quotePromo/QuotePromo';

export default function Hero() {
  return (
    <div className='hero-container'>
      <div id='intro-left'>
        <h1>Pet Insurance Designed for Pet People</h1>
        <p>Flexible, reliable pet insurance for intentional, modern pet parents.</p>
      </div>
      <div id='intro-right'>
        <QuoteTable />
        <img id='owner-with-pets-img' src='src/assets/owner-with-pets.svg' alt='Owner with pets' />
      </div>
    </div>
  )
}