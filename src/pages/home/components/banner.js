import React, { Component } from 'react';
import Slider from 'react-slick';
import { SliderImg } from '../style';
 
class Banner extends Component {
    render(){
        return (
        <Slider>
            <SliderImg>page1</SliderImg>
            <SliderImg>page2</SliderImg>
        </Slider >
        )
    }
}
export default Banner;