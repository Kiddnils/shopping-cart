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
      <div className="CartItem">
        <div className="desc left">
          <img
            className="cart_img"
            src={"images/" + this.props.product.image}
            alt=""
            height="150"
          />
        </div>
        <div className="desc right">
          <div className="clear" />
          <p className="desc"> {this.props.product.titel}</p>
          <div className="clear" />
          <p className="desc">In Stock:</p>
          <p className="desc"> {this.props.product.count}</p>
          <div className="clear" />

          <div className="clear" />
          <p className="attribute">
            {this.props.amount * this.props.product.price}
          </p>
          <p className="attribute">=</p>
          <p className="attribute"> {this.props.product.price}</p>
          <p className="attribute"> * </p>
          <input
            className="attribute"
            type="number"
            min="0"
            id="new-todo"
            onChange={this.handleChange}
            value={this.props.amount}
          />
          <div className="clear" />
        </div>
      </div>
    );
  }
}

export default Cart;
