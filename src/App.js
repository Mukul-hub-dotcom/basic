import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Context from './components/Context';
import Bat from './components/Bat';

function App() {
  const [theme,setTheme]=useState(false)
  return (
    <Context.Provider value={theme} >
      <button onClick={()=>setTheme(!theme)}>Change Theme</button>
      <h3>For setting theme I've used context api</h3>

      
        <Counter/>
        <Bat/>
        
      
    </Context.Provider>
  );
}

export default App;
