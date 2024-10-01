import './PetInsurance.css';

import Hero from './hero/Hero';
import CoveredSection from './coveredSection/CoveredSection';
import QuoteSection from './quoteSection/QuoteSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <CoveredSection />
      <QuoteSection />
      <div id='plans-explain'>
        <h2 className='explain-header'>Plans Details</h2>
      </div>
    </div>
  )
}