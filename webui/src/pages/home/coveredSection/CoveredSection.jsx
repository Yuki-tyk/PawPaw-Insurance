import './CoveredSection.css';

export default function CoveredSection() {
  return (
    <div id='covered-section'>
        <h2 className='covered-explain-header'>What is covered?</h2>
        <div id='covered-list'>
          <div className='covered-item'>
            <img className='covered-item-img' src='src/assets/accident-and-illness.svg' alt='Accident & Illness Image'/>
            <p className='covered-item-topic'>Accident &amp; Illness</p>
            <ul>
              <li>Exam fees</li>
              <li>Cancer, diabetes</li>
              <li>Respiratory infections</li>
            </ul>
          </div>
          <div className='covered-item'>
            <img className='covered-item-img' src='src/assets/preventive-care.svg' alt='Preventive Care Image'/>
            <p className='covered-item-topic'>Preventive Care</p>
            <ul>
              <li>Annual wellness exams</li>
              <li>Spaying or neutering</li>
              <li>Dental cleaning</li>
            </ul>
          </div>
          <div className='covered-item'>
            <img className='covered-item-img' src='src/assets/accident-only.png' alt='Accident Only Image'/>
            <p className='covered-item-topic'>Accident Only</p>
            <ul>
              <li>Swallowed objects</li>
              <li>Surgery &amp; hospitalization</li>
              <li>Toxic ingestion</li>
            </ul>
          </div>
        </div>
    </div>
  )
}
