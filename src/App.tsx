import React, { useState } from 'react';
import './App.css';

import { UseStateExample } from './hooks/useState/useState';
import UseEffectExample from './hooks/useEffect/useEffect';

const HOOKS = [{
  title: "I hereby declare useState!",
  component: UseStateExample
}, {
  title: "You used useEffect. It was Super Effective!",
  component: UseEffectExample
}];

const App: React.FC = () => {
  let [index, setIndex] = useState(0);

  const HookExample = HOOKS[index].component;

  return (
    <div className="App">
      <h1>Get Hooked on React Hooks!</h1>
      <div className="btn-group">
        <button onClick={() => index - 1 > -1 ? setIndex(index - 1) : ""}>Previous</button>
        <button onClick={() => index + 1 < HOOKS.length ? setIndex(index + 1) : ""}>Next</button>
      </div>
      <h4>Lesson #{index + 1}: {HOOKS[index].title}</h4>
      <HookExample/>
    </div>
  );
}

export default App;
