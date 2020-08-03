import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, SearchBar, Button } from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <SearchWrapper>
            <SearchBar />
          </SearchWrapper>
          <NavItem className="left active">Home</NavItem>
          <Button className="reg">Register</Button>
          <NavItem className="right">Login</NavItem>
          <NavItem className="right">Orders</NavItem>
          <NavItem className="right">Cart</NavItem>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header;
