import * as React from "react";

import { IProduct } from "./Product";

export interface ICartProps {
  id: string;
  product: IProduct;
  onItemClick(st: string, amount: number): void;
}

class Cart extends React.Component<ICartProps> {
  public render() {
    return (
      <div className="Cart">
        <p>Cart</p>
      </div>
    );
  }
}

export default Cart;
