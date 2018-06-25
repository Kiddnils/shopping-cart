import * as React from 'react';

export interface IShop { items: string; }


class Shop extends React.Component<IShop> {
  public render() {
    return (
      <div className="Shop">
        <ul>
          {this.props.items}
        </ul>
      </div>
    );
  }
}

export default Shop;
