import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

// importing components
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState ([
    'violet', 'blue', 
    'lightblue', 'green', 
    'greenyellow', 'yellow', 
    'orange', 'red'])
  let colorMap = colors.map((color, i) => {
    return (
    // sending props to ColorBlock
    <ColorBlock key= {i} color={color}/>
    )
  })

  // using the spread operator (...) to make a new color array with the new color plus the old colors
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor}/>
    </div>
  )
}

export default App;
