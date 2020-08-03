import React, { Component } from 'react';
import Banner from './components/banner';
import Products from './components/products';
import { HomeWrapper, Notice } from './style';


class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <Banner />
                <Notice />
                <Products />               
            </HomeWrapper>
        );
    }
}

export default Home;