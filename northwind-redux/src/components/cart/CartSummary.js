import React, { Component } from "react";
import { connect } from "react-redux";
import * as cartActions from '../../redux/actions/cartActions'
import { bindActionCreators } from 'redux'
import alertify from 'alertifyjs'

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";

class CartSummary extends Component {

    removeFromCart(product){
        this.props.actions.removeFromCart(product)
    alertify.error(product.productName+" has been removed from your cart")

    }
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Empty cart</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu end>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Badge color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>X</Badge>

              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem><Link to={"/cart"}>Go to cart</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions:{
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
