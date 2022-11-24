import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Context from './components/Context';
import Bat from './components/Bat';
import {Provider} from 'react-redux'
import store from './redux/store';
import Ball from './components/Ball';
import User from './components/User';
function App() {
  const [theme,setTheme]=useState(false)
  return (
   <div>
    {/* <Context.Provider value={theme} >
       <button onClick={()=>setTheme(!theme)}>Change Theme</button>
       <h3>For setting theme I've used context api</h3>

      
         <Counter/>
         
        
      
     </Context.Provider> */}

    <Provider store={store}>
      <h2>Done with redux</h2>

<Bat/>
<Ball/>

    </Provider>
    <User/>
    
    </div>
  );
}

export default App;
