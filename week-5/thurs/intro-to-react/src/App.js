import React, { useState } from 'react';
import Child from './Child';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  return (
    <div className='App'>
      <h1>App Component</h1>
      <h3>{input}</h3>
      <input
        type='text'
        placehold='Write here'
        onChange={(e) => setInput(e.target.value)}
      />
      <Child userInput={input} />
    </div>
  );
}

export default App;
