import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Context from './components/Context';

function App() {
  const [theme,setTheme]=useState(false)
  return (
    <Context.Provider value={theme} >
      <button onClick={()=>setTheme(!theme)}>Change Theme</button>

      
        <Counter/>
        
      
    </Context.Provider>
  );
}

export default App;
