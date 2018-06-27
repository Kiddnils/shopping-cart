import * as React from "react";
import { Product } from "./Product";
import { IProduct } from "./Product";
import "./Shop.css";

export interface IShop {
  products: {
    [id: string]: IProduct;
  };
  onItemClick(st: string, amount: number): void;
}

class Shop extends React.Component<IShop> {
  public render() {
    return (
      <div className="Shop">
        <ul className="product-list">
          {Object.keys(this.props.products).map(product => (
            <li key={product} className="product-list_item">
              <Product
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

export default Shop;
