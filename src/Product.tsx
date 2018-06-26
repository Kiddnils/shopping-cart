import * as React from "react";

export interface IProduct {
  titel: string;
  description: string;
  image: string;
  count: number;
  price: number;
}

export interface IProductProps {
  id: string;
  product: IProduct;
  onItemClick(st: string, amount: number): void;
}

export interface IProductState {
  amount: number;
}

export class Product extends React.Component<IProductProps, IProductState> {
  constructor(props: IProductProps) {
    super(props);
    this.state = { amount: 0 };
  }

  public onClickLocal = () => {
    this.props.onItemClick(this.props.id, this.state.amount);
  };

  public render() {
    return (
      <div className="Product">
        <h1>{this.props.product.titel}</h1>
        <h1>{this.props.product.description}</h1>
        <h1>{this.props.product.image}</h1>
        <h1>{this.props.product.count}</h1>
        <h1>{this.props.product.price}</h1>
        <button className="square" onClick={this.onClickLocal}>
          "Add to cart."
        </button>
      </div>
    );
  }
}

export default Product;
