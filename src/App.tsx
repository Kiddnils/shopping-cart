import * as React from 'react';
import './App.css';

import Cart from './Cart';
import Header from './Header';
import Shop from './Shop';


export interface IApp { items: string; }

class App extends React.Component<{}, { items: string }> {
  constructor(props: IApp) {
    super(props);
    this.state = { items: "test" };
  }

  public render() {
    return (
      <div>
        <Header />
        <Shop items={this.state.items} />
        <Cart />
      </div>
    );
  }
}

export default App;
