import * as React from "react";

import { IProduct } from "./Product";

export interface ICartProps {
  id: string;
  amount: number;
  product: IProduct;
  onItemClick(st: string, amount: number): void;
}

class Cart extends React.Component<ICartProps> {
  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onItemClick(
      this.props.id,
      -(this.props.amount - +e.target.value)
    );
  };

  public render() {
    return (
      <div className="Cart">
        <img
          className="cart_img"
          src={"images/" + this.props.product.image}
          alt=""
          height="150"
        />
        <p>{this.props.product.titel}</p>
        <p>{this.props.product.count}</p>
        <p>{this.props.product.price}</p>
        <p>{this.props.amount * this.props.product.price}</p>
        <input
          type="number"
          min="0"
          id="new-todo"
          onChange={this.handleChange}
          value={this.props.amount}
        />
      </div>
    );
  }
}

export default Cart;
