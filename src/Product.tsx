import * as React from "react";

export interface IProduct {
  titel: string;
  description: string;
  image: string;
  count: string;
  price: string;
}

class Product extends React.Component<IProduct> {
  public render() {
    return (
      <div className="Product">
        <h1>this.props.titel</h1>
        <h1>this.props.description</h1>
        <h1>this.props.image</h1>
        <h1>this.props.count</h1>
        <h1>this.props.price</h1>
      </div>
    );
  }
}

export default Product;
