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
    </div>
    // </AppContext.Provider>
  )
}

export default App

{/* <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button> */}