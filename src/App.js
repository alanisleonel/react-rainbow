import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

// importing components
import ColorBlock from './ColorBlock';

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
  return (
    <div className="App">
      {colorMap}
    </div>
  );
}

export default App;
