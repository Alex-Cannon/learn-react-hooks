import React, { useState } from 'react';
import './App.css';

import { UseStateExample } from './hooks/useState/useState';

const HOOKS = [{
  title: "I hereby declare useState!",
  component: UseStateExample
}];

const App: React.FC = () => {
  let [index, setIndex] = useState(0);

  const HookExample = HOOKS[index].component;

  return (
    <div className="App">
      <h1>Get Hooked on React Hooks!</h1>
      <h4>Lesson #{index + 1}: {HOOKS[index].title}</h4>
      <HookExample/>
    </div>
  );
}

export default App;
