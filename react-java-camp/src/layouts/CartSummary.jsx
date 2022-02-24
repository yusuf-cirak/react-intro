import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, Label } from "semantic-ui-react";

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);
  // useSelector Redux'a gidip state'lerden istediğimizi alabilmemizi sağlıyor. cart'ı almış, abone olmuş olduk.

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item key={cartItem.product.id}>
              {cartItem.product.productName}
              <Label>{cartItem.quantity}</Label>
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            Sepete git
          </Dropdown.Item>
          {/* Bu kod bizi dropdown.item içine Link component'ini yazmaktan kurtarıyor. Bu özellik semantic-react-ui'a ait. */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
