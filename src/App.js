import './App.css';
import { useState, useEffect } from 'react'
import Names from './names'

function App() {

  // set state of birds visibility
  const [birdIsVisible, setBirdIsVisible] = useState(false)

  // set state of birds array and counter
  const [birdPicArray, setBirdPicArray] = useState([])
  const [counter, setCounter] = useState(0)

  // use effect to fet birds
  useEffect(() => {
    fetch('https://api.unsplash.com/search/photos?query=birds&client_id=_E0L2iuifWVbT6iPaiETBGgQc2jKIjzKY3dYQXncj7c')
    .then(res => {
      return res.json();
    })
    .then((birds) => {
      // set birds to birdPicArray state
      setBirdPicArray(birds.results)
    })
  },[])

  // find index of displayed bird using counter state
  const URL = birdPicArray[counter]

  // handle next button click increasing counter based on length of birdPicArray making sure counter can't go above birdPicArray highest index
  const handleNext = () => {
    if (counter < birdPicArray.length - 1) {
      setCounter(counter + 1)
    }
  }

  // handle previous button click decreasing counter based on length of birdPicArray, making sure counter can't go below 0
  const handlePrevious = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  // toggle visibility of bird picture using birdIsVisible state
  const handleVisible = () => {
    setBirdIsVisible(!birdIsVisible)
  }

  return (
    <div className="App">

      { birdIsVisible === false

      ?

      <div className="button-div">
      <button onClick={handleVisible}> HEY KID, WANNA SEE SOME BIRDS? </button>
      {/* importing names.js to show unique list in console.log */}
      <Names />
      </div>

      :
      
      <div>
      <div className="img-div">
      <img src={URL?.urls.small} alt="hello" />
      </div>
      <div className="button-div">
      <button onClick={handlePrevious}> previous Bird </button>
      <button onClick={handleNext}> Next Bird </button>
      </div>
      <div className="button-div">
      <button onClick={handleVisible}> PLEASE, NO MORE BIRDS! </button>
      </div>
      {/* importing names.js to show unique list in console.log */}
      <Names />
      </div>

      }

    </div>
  );
}

export default App;
