import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useSelector } from "react-redux";


export default function Navi() {
  let [isAuthenticated, setIsAuthenticated] = useState(false)
  /* isAuthenticated state'imiz yani Navi component'inin datası.
     setIsAuthenticated ise state'i değiştirecek method.
     false ise initialState. İlk başta siteyi açan kullanıcı authenticated olmamış gibi kabul ediyoruz mantıken.
  */
 const navigate=useNavigate(); // history yerine navigate kullanıyoruz.

 const { cartItems } = useSelector((state) => state.cart);


function handleSign() {
  setIsAuthenticated(isAuthenticated=!isAuthenticated);
  // Giriş yapmışsa çıkış yap, girmemişse giriş yap.
  if(isAuthenticated===false) navigate("/")
  // Kullanıcı çıkış yapmışsa onu ana sayfaya gönder.
}
  return (
    <div>
      <Menu inverted fixed={"top"}>
        {/*inverted siyah renk, fixed aşağıya indiğinde de navbar gözükecek. */}
         <Container> {/* sayfanın belli kısmında içerik olsun tamamının içinde olmasın */}
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length>0 && <CartSummary/>}

            {isAuthenticated?<SignedIn signOut={handleSign}/>:<SignedOut signIn={handleSign}/>}
            {/* SignedIn component'ine signOut prop'ı gönderdik. */}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
