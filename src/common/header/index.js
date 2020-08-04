import React, { Component } from "react";
import IconFont from 'react-iconfonts'
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, SearchBar, Button } from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <SearchWrapper>
          <IconFont
            type='icon'
            name='fangdajing'
            color='7F7F7C'
            size='15'
          />
            <SearchBar />
          </SearchWrapper>
          <NavItem className="left active">Home</NavItem>
          <Button className="reg">Register</Button>
          <NavItem className="right">Login</NavItem>
          <NavItem className="right">My Orders</NavItem>
          <NavItem className="right">
          <IconFont
            type='icon'
            name='ShoppingCart'
            color='7F7F7C'
            size='25'
          />
          </NavItem>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header;
