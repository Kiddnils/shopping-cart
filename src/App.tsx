import * as React from "react";
import "./App.css";

import Cart from "./Cart";
import Header from "./Header";
import { IProduct } from "./Product";
import Shop from "./Shop";

export interface IApp {
  items: string;
}

export interface IAppState {
  cart: {
    [id: string]: { count: number };
  };
  products: {
    [id: string]: IProduct;
  };
}

class App extends React.Component<{}, IAppState> {
  constructor(props: IApp) {
    super(props);
    this.state = {
      cart: {},
      products: {
        "1": {
          count: 2,
          description: "test",
          image: "imagelink",
          price: 200,
          titel: "Nokia 6.1"
        },
        "2": {
          count: 3,
          description: "test",
          image: "imagelink",
          price: 400,
          titel: "Nokia 7.1"
        }
      }
    };
  }

  public handleClick = (st: string, amount: number) => {
    const cartTemp = { ...this.state.cart };
    cartTemp[st] = {
      count: amount
    };
    this.setState({ cart: cartTemp });
  };

  public render() {
    return (
      <div>
        <Header />
        <Shop products={this.state.products} onItemClick={this.handleClick} />
        <Cart
          cart={this.state.cart}
          products={this.state.products}
          onItemClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
