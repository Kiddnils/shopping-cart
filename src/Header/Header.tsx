import * as React from "react";

export interface IHeaderProps {
  cartCount: number;
  switchStateToShop(): void;
  switchStateToCart(): void;
}

class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <div className="header">
        <div className="logo">
          <p>shopping-cart with React.js and Typescript</p>
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
            <div className="cart-count">
              <p onClick={this.props.switchStateToCart}>
                &nbsp;{this.props.cartCount}&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
