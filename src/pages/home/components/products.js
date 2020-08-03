import React, { Component } from 'react';
import { ProductWrapper, ProductItem } from '../style';

class products extends Component {
    render() {
        return (
            <ProductWrapper>
                <ProductItem className="left"/>
                <ProductItem className="center"/>
                <ProductItem className="right"/>
            </ProductWrapper>
        );
    }
}

export default products;