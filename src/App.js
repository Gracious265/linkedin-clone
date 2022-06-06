import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="app">

       {/* Header */ }
        < Header />  
       {/* App Body */ }
       <div className='app__body'>
        < Sidebar />
       </div>

          {/* Sidebar */ }
      

          {/* Feed  */ }

          {/* Widgets */ }
    </div>
  );
}

export default App;
