import './QuotePromo.css';

export default function QuoteTable() {
  return (
    <div id='quote-promo-container'>
        <h5>The best pet insurance in Hong Kong</h5>
        <ul>
          <li>Coverage up to <em>HK$100,000</em> with no sublimits, reimbursement rate of up to 90%*.</li>
          <li>Exclusive supplementary critical illness cash benefit.</li>
        </ul>
        <p>Enroll on or before {"30 Sep 2024"} to enjoy <em>15% off</em> your first year&rsquo;s premium!</p>
        {/* <div>
            <p>dog/cat</p>
            <p>pet age</p>
            <p>pet breed</p>
        </div> */}
        <div id='btn-group'>
          <button className='quote-promo-btn'>Get Quote</button>
          <button className='quote-promo-btn'>Learn More</button>
        </div>
        <p>*Terms and conditions apply.</p>
    </div>
  )
}
