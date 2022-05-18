import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
// import AppContext from './Context';
import Carousel from './Carousel.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    // <AppContext.Provider >
      <div className="App">
      <div className="App-header">
      <header className="headline-text">
        <p>OCCASIONALLY, WE OFFER PERSPECTIVES ON THE DIRECT-TO-CONSUMER LANDSCAPE, RETAIL INNOVATIONS, HAPPENINGS AROUND PACT AND THE ODD CREATIVE EXPERIMENT.</p>
        <p>
        </p>
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
    // </AppContext.Provider>
  )
}

export default App

{/* <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button> */}