import * as React from "react";
import "./App.css";

import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import { IProduct } from "../Shop/Product";
import Shop from "../Shop/Shop";

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
  activeElements: {
    [element: string]: { active: boolean };
  };
}

class App extends React.Component<{}, IAppState> {
  constructor(props: IApp) {
    super(props);
    this.state = {
      activeElements: {
        cart: { active: false },
        shop: { active: true }
      },
      cart: {},
      products: {
        "1": {
          count: 5,
          description: "Made by Nokia",
          image: "nokia6.1.jpg",
          price: 249,
          titel: "Nokia 6.1"
        },
        "2": {
          count: 8,
          description: "Made by Nokia",
          image: "nokia7.1.jpg",
          price: 364,
          titel: "Nokia 7.1"
        },
        "3": {
          count: 20,
          description: "Made by Nokia",
          image: "nokia8.jpg",
          price: 689,
          titel: "Nokia 8"
        },
        "4": {
          count: 9,
          description: "Made by Essential",
          image: "essentialphone.jpg",
          price: 579,
          titel: "Essential Phone"
        },
        "5": {
          count: 200,
          description: "Made by OnePlus",
          image: "oneplus6.jpg",
          price: 569,
          titel: "One Plus 6"
        }
      }
    };
  }

  public handleClick = (st: string, amount: number) => {
    const cartTemp = { ...this.state.cart };
    let oldValue: number;

    if (cartTemp[st] == null) {
      oldValue = 0;
    } else {
      oldValue = cartTemp[st].count;
    }

    cartTemp[st] = {
      count: oldValue + amount
    };
    // if count in cart is larger than existing inventory set count to max inventory
    if (cartTemp[st].count > this.state.products[st].count) {
      cartTemp[st] = {
        count: this.state.products[st].count
      };
    }
    // if count is zero, remove from cart list
    if (cartTemp[st].count === 0) {
      delete cartTemp[st];
    }

    this.setState({ cart: cartTemp });
  };

  public switchStateToShop = () => {
    const activeElementsTemp = { ...this.state.activeElements };
    activeElementsTemp.shop = { active: true };
    activeElementsTemp.cart = { active: false };
    this.setState({ activeElements: activeElementsTemp });
  };

  public switchStateToCart = () => {
    const activeElementsTemp = { ...this.state.activeElements };
    activeElementsTemp.shop = { active: false };
    activeElementsTemp.cart = { active: true };
    this.setState({ activeElements: activeElementsTemp });
  };

  public getTotalCartItems = () => {
    let total: number = 0;

    {
      Object.keys(this.state.cart).map(
        cart => (total += +this.state.cart[cart].count)
      );
    }

    return total;
  };

  public render() {
    return (
      <div className="App">
        <Header
          switchStateToShop={this.switchStateToShop}
          switchStateToCart={this.switchStateToCart}
          cartCount={this.getTotalCartItems()}
        />
        {this.state.activeElements.shop.active ? (
          <Shop products={this.state.products} onItemClick={this.handleClick} />
        ) : null}

        {this.state.activeElements.cart.active ? (
          <Cart
            cart={this.state.cart}
            products={this.state.products}
            onItemClick={this.handleClick}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
