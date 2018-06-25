import * as React from "react";
import { Product } from "./Product";
import { IProduct } from "./Product";

export interface IShop {
  products: {
    [id: string]: IProduct;
  };
}

class Shop extends React.Component<IShop> {
  public render() {
    return (
      <div className="Shop">
        <ul className="product-list">
          {Object.keys(this.props.products).map(product => (
            <li key={product} className="product-list_item">
              <Product {...this.props.products[product]} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Shop;
