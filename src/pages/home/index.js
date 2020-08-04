import React, { Component } from "react";
import Banner from "./components/banner";
import Products from "./components/products";
import Category from "./components/category";
import Brands from './components/brands';
import { HomeWrapper, NoticeWrapper, NoticeLeft, NoticeRight } from "./style";
import IconFont from 'react-iconfonts'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <Category />
        <Banner />
        <NoticeWrapper>
          <NoticeLeft>
            <IconFont type="icon" name="manyi" color="F8440F" size="16" />
            &nbsp;
            SATISFY ALL YOUR SPORTS NEEDS
          </NoticeLeft>
          <NoticeRight>
            <IconFont type="icon" name="qiache" color="F8440F" size="20" />
            &nbsp;
            FAST DELIVERY TO YOUR HOME
          </NoticeRight>
        </NoticeWrapper>
        <Products />
        <Brands />
      </HomeWrapper>
    );
  }
}

export default Home;
