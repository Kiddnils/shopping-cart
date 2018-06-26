import * as React from "react";

import CartItem from "./CartItem";
import { IProduct } from "./Product";

export interface ICartProps {
  cart: {
    [id: string]: { count: number };
  };
  products: {
    [id: string]: IProduct;
  };
  onItemClick(st: string, amount: number): void;
}

class Cart extends React.Component<ICartProps> {
  public render() {
    return (
      <div className="Cart">
        <ul className="cart-list">
          {Object.keys(this.props.cart).map(product => (
            <li key={product} className="product-list_item">
              <CartItem
                id={product}
                product={this.props.products[product]}
                onItemClick={this.props.onItemClick}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cart;
