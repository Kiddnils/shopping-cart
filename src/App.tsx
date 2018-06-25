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
  products: {
    [id: string]: IProduct;
  };
}

class App extends React.Component<{}, IAppState> {
  constructor(props: IApp) {
    super(props);
    this.state = {
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

  public render() {
    return (
      <div>
        <Header />
        <Shop products={this.state.products} />
        <Cart />
      </div>
    );
  }
}

export default App;
