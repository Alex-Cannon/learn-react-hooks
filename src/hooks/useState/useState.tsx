import React, { useState } from 'react';

// Function Syntax / using Hooks
export default () => {
  let [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </>
  );
}

// Class Syntax
// Note: We're using TypeScript, so it's a little different than usual
type Props = {};

type State = {
  count: number
};

export class UseStateExample extends React.Component<Props, State> {
  public readonly state: State = {
    count: 0
  }
  
  setCount(count: number) {
    this.setState({ count });
  }

  public render () {
    let { count } = this.state;

    return (
      <>
      <h1>{count}</h1>
        <button onClick={() => this.setCount(count + 1)}>Add 1</button>
      </>
    );
  }
}