import { useState } from 'react'
import './App.css'
import Carousel from './Carousel.jsx';

function App() {
  if (window.screen.width > 600) {
    return (
      <div className="App">
      <div className="App-header">
      <header className="headline-text">
        <p>OCCASIONALLY, WE OFFER PERSPECTIVES ON THE DIRECT-TO-CONSUMER LANDSCAPE, RETAIL INNOVATIONS, HAPPENINGS AROUND PACT AND THE ODD CREATIVE EXPERIMENT.</p>
      </header>
    </div>
    <div className='carousel-holder'>
      <Carousel/>
    </div>
    <div className='footer-blurb'>
      <p className='intersection'>THE INTERSECTION OF DESIGN, TECHNOLOGY AND BUSINESS.</p>
      <p className='about-blurb'>Pact takes a unique, team-like, and holistic approach to building direct-to-consumer businesses: we do more across a variety of touchpoints for
      fewer clients so that we can be accountable and flexible to all the road bumps that inherently come with building something new.</p>
          <button className='work-button' type="button" onClick={() => alert('Hi Pact')}>
            START YOUR PROJECT WITH PACT
          </button>
    </div>
    </div>
  )
  } else {
    return (
      <div className="App">
      <div className="App-header">
      <header className="headline-text">
        <p>OCCASIONALLY, WE OFFER PERSPECTIVES ON THE DIRECT-TO-CONSUMER LANDSCAPE, RETAIL INNOVATIONS, HAPPENINGS AROUND PACT AND THE ODD CREATIVE EXPERIMENT.</p>
      </header>
    </div>
    {/* <div className='carousel-holder'>
      <Carousel/>
    </div> */}
    <div className='footer-blurb-mobile'>
      <p className='intersection-mobile'>THE INTERSECTION OF DESIGN, TECHNOLOGY AND BUSINESS.</p>
      <p className='about-blurb-mobile'>Pact takes a unique, team-like, and holistic approach to building direct-to-consumer businesses: we do more across a variety of touchpoints for
      fewer clients so that we can be accountable and flexible to all the road bumps that inherently come with building something new.</p>
          <button className='work-button-mobile' type="button" onClick={() => alert('Hi Pact')}>
            START YOUR PROJECT WITH PACT
          </button>
    </div>
    </div>
  )
  }

}

export default App
