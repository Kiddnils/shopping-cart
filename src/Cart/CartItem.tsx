import * as React from "react";

import { IProduct } from "../Shop/Product";

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
      <div className="cart_item">
        <div className="desc_left">
          <img
            className="cart_img"
            src={"images/" + this.props.product.image}
            alt=""
            height="150"
          />
        </div>
        <div className="desc_middle">
          <div className="clear" />
          <p className="desc"> {this.props.product.titel}</p>
          <div className="clear" />
          <p className="desc">In Stock:&nbsp;</p>
          <p className="desc"> {this.props.product.count}</p>
          <div className="clear" />
        </div>
        <div className="desc_right">
          <div className="clear" />
          <p className="attribute accent-color">
            {this.props.amount * this.props.product.price}€
          </p>
          <p className="attribute">&nbsp; = &nbsp;</p>
          <p className="attribute"> {this.props.product.price}€</p>
          <p className="attribute">&nbsp; * &nbsp;</p>
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
