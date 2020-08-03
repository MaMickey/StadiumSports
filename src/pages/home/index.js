import React, { Component } from 'react';
import Banner from './components/banner';
import { HomeWrapper } from './style';


class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <Banner />               
            </HomeWrapper>
        );
    }
}

export default Home;