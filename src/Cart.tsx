import * as React from "react";
import "./Cart.css";

import CartItem from "./CartItem";
import { IProduct } from "./Product";

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
          {Object.keys(this.props.cart).map(cart => (
            <li key={cart} className="cart_item">
              <CartItem
                id={cart}
                amount={this.props.cart[cart].count}
                product={this.props.products[cart]}
                onItemClick={this.props.onItemClick}
              />
            </li>
          ))}
        </ul>
        <div className="cart_item">
          <p>Total: {this.getTotal()}</p>
        </div>
      </div>
    );
  }
}

export default Cart;
