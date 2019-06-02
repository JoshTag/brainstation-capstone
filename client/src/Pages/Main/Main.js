import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import './Main.scss';
import Carousel from '../../Components/Carousel/Carousel';

export class Main extends Component {
    render() {
        return (
            <div >
                <Nav />
                <div className="hero">
                    <div className="hero__content">
                        <div className="hero__content__headerContainer">
                            <h1 className="hero__content__header">Warcraft Auctions</h1>
                            <h3 className="hero__content__description">A source for World of Warcraft auction house statistics</h3>
                        </div>
                        <div className="hero__content__search">
                            <input className="hero__content__bar" type="text" placeholder="search"></input>
                            <button className="hero__content__btn">SEARCH</button>
                        </div>
                    </div>
                    <div className="transparent"/>
                </div>
                <Carousel />
                <div className="cardContainer">
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
