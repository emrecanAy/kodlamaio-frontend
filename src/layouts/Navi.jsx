import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  const {cartItems} = useSelector(state => state.cart)
  function handleSignOut(params) {  //bu component navi'de tanımlı. fakat bunu bir alt komponentte kullanmamız gerek. nasıl yapıyoruz. bkz 23
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn(params) {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" name="home" />
          <Menu.Item name="messages" />
{/* //kişi authenticate olduysa signedin olmadıysa signedoutu göster diyeceğiz. */}
          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary/>} {/* cart summary ancak uzunuluğu 0'dan büyük olursa render et anlamına gelir. */}
            {isAuthenticated?<SignedIn signOut={handleSignOut}/> : <SignedOut signIn={handleSignIn}/>} {/* sanki signIn'in içinde signOut diye bir metod var da o da aslında handlesignoutu tetikliyor. */}
            
          
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
