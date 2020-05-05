import React, { Component } from 'react';
import Nav from './../../Components/Nav/Nav';
import './Main.scss';
import Carousel from './../../Components/Carousel/Carousel';
import MainCards from './../../Components/MainCards/MainCards';
import Hero from '../../Components/Hero/Hero'

export class Main extends Component {
    render() {
        return (
            <div >
                <Nav />
                <Hero />
                <Carousel />
                <MainCards />
            </div>
        )
    }
}

export default Main;

