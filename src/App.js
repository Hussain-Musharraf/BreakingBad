import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Characters from './Characters/Characters';
function App() {
  const [text,setText]=useState('');
  return (
    <div className='App'>
      <Header setText={setText}/>
      <Characters text={text}/>
    </div>
  );
}

export default App;
