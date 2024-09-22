import './PetInsurance.css';

import Hero from './hero/Hero';
import CoveredSection from './coveredSection/CoveredSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <CoveredSection />
      <div id='plans-explain'>
        <h2 className='explain-header'>Find the best plan for your pet</h2>
      </div>
    </div>
  )
}