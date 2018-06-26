import * as React from "react";
import "./Header.css";

export interface IHeaderProps {
  cartCount: number;
  switchStateToShop(): void;
  switchStateToCart(): void;
}

class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <div className="Header">
        <div className="logo">
          <p>smartphone-picker 2.0</p>
        </div>
        <div className="navigation">
          <div>
            <img
              className="navigation-img"
              src={"images/phone.png"}
              alt=""
              height="80"
              onClick={this.props.switchStateToShop}
            />
          </div>
          <div>
            <img
              className="navigation-img"
              src={"images/cart.png"}
              alt=""
              height="80"
              onClick={this.props.switchStateToCart}
            />
            <p>{this.props.cartCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
