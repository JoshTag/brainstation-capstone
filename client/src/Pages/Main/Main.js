import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import './Main.scss';
import Carousel from '../../Components/Carousel/Carousel';
import MainCards from '../../Components/MainCards/MainCards';
import { Link } from 'react-router-dom';
import Hero from '../../Components/Hero/Hero'

export class Main extends Component {
    render() {
        return (
            <div >
                <Nav />
                {/* <div className="hero">
                    <div className="hero__content">
                        <div className="hero__content__headerContainer">
                            <h1 className="hero__content__header">
                                Warcraft Auctions
                            </h1>
                            <h3 className="hero__content__description">
                                A source for World of Warcraft auction house statistics
                            </h3>
                        </div>
                        <Link to="/dashboard" className="hero__content__btn">
                            <p>ENTER</p>
                        </Link>
                    </div>
                    <div className="transparent"/>
                </div> */}
                <Hero />
                <Carousel />
                <MainCards />
            </div>
        )
    }
}

export default Main;

