import React, { Component } from 'react';
import { CategoryWrapper, CategoryList, CategoryTitle } from '../style';

class category extends Component {
    render() {
        return (
            <CategoryWrapper>
                <CategoryTitle>Category</CategoryTitle> 
                <CategoryList>
                    <li>AFL & NFL</li>
                    <li>Fitness</li>
                    <li>Badminton</li>
                    <li>Basketball</li>
                    <li>Boxing</li>
                    <li>General Sports</li>
                    <li>Soccer</li>
                    <li>Tennis</li>
                    <li>Table-Tennis</li>
                    <li>Volleyball</li>
                    <li>Squash</li>
                    <li>Ohters</li>
                </CategoryList>               
            </CategoryWrapper>
        );
    }
}

export default category;