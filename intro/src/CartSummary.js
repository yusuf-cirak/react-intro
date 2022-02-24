import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink
} from "reactstrap";

export default class CartSummary extends Component {
    renderSummary=()=>{
        return (
            <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Your Cart
          </DropdownToggle>
          <DropdownMenu end>
            {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
                {cartItem.product.productName} <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem><Link to="cart">Go to cart</Link></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        )
    }

    emptyCart=()=>{
        return (
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        )
    }
  render() {

    return (
      <div>
        {this.props.cart.length>0?this.renderSummary():this.emptyCart()}
      </div>
    );
    // Cart length'i 0'dan büyükse renderSummary fonksiyonunu çalıştır, değilse emptyCart döndür.
  }
}
