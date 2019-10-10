import React, { useState, useEffect } from 'react';

export default () => {
  let [seconds, setSeconds] = useState(0);

  // ComponentDidMount, ComponentDidUpdate, and ComponentWillUnmount combined
  // is useEffect().
  useEffect(() => {
    window.setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Equvilent to componentWillUnmount
    return clearInterval();
  }, []); // Updates when variables provided change. [] is equivilent to componentDidMount.

  return (
    <div>
      <h1>Timer: {seconds}</h1>
      <p>The timer starts when the component mounts. It is removed when the component unmounts</p>
    </div>
  );
}