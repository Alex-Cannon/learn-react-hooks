import React, { useContext } from 'react';

import { StateContext } from '../../App';
import THEME from '../../utils/theme';

export default () => {
  const [state, dispatch] = useContext(StateContext);
  const { theme } = state;

  return (
    <button 
      onClick={() => {
        dispatch({ type: "SET_THEME", data: theme.light ? THEME.dark : THEME.light });
      }}
      style={{ color: theme.foreground, background: theme.background}}>
      Toggle Button Theme
    </button>
  );
}