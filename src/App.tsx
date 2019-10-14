import React, { useState, useReducer } from 'react';
import './App.css';

import { HOOKS } from './utils/hookExamples';
import THEME from './utils/theme';

import reducer from './utils/reducer';

export const StateContext = React.createContext({});

const App = () => {
  let [index, setIndex] = useState(HOOKS.length - 1);

  const HookExample = HOOKS[index].component;

  return (
    <StateContext.Provider value={useReducer(reducer, { theme: THEME.light })}>
      <div className="App">
        <h1>Get Hooked on React Hooks!</h1>
        <div className="btn-group">
          <button onClick={() => index - 1 > -1 ? setIndex(index - 1) : ""}>Previous</button>
          <button onClick={() => index + 1 < HOOKS.length ? setIndex(index + 1) : ""}>Next</button>
        </div>
        <h4>Lesson #{index + 1}: {HOOKS[index].title}</h4>
        <HookExample/>
      </div>
    </StateContext.Provider>
  );
}

export default App;
