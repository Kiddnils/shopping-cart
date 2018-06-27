import * as React from "react";
import "./Cart.css";

import { IProduct } from "../Shop/Product";
import CartItem from "./CartItem";

export interface ICartProps {
  cart: {
    [id: string]: { count: number };
  };
  products: {
    [id: string]: IProduct;
  };
  sum?: number;
  onItemClick(st: string, amount: number): void;
}

class Cart extends React.Component<ICartProps> {
  public getTotal = () => {
    let total: number = 0;

    {
      Object.keys(this.props.cart).map(
        cart =>
          (total +=
            +this.props.cart[cart].count * +this.props.products[cart].price)
      );
    }

    return total;
  };

  public render() {
    return (
      <div className="Cart">
        <ul className="cart-list">
          {Object.keys(this.props.cart).length === 0 ? (
            <li key="empty" className="cart-list-item">
              <p>No item in cart.</p>
            </li>
          ) : null}
          {Object.keys(this.props.cart).map(cart => (
            <li key={cart} className="cart-list-item">
              <CartItem
                id={cart}
                amount={this.props.cart[cart].count}
                product={this.props.products[cart]}
                onItemClick={this.props.onItemClick}
              />
            </li>
          ))}
        </ul>
        <div className="cart-list-item attribute accent-color">
          <p>Total: {this.getTotal()}€</p>
        </div>
      </div>
    );
  }
}

export default Cart;
