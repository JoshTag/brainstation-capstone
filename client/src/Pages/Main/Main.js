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
                    <div className="cardContainer__card">
                        <h3 className="cardContainer__card__title">
                            POPULAR ITEMS
                        </h3>
                        <ul className="cardContainer__card__list">
                            <li>Akunda's Bite</li>
                            <li>Anchor Weed</li>
                            <li>Goblin Glider Kit</li>
                            <li>Monelite Ore</li>
                            <li>Platinum Ore</li>
                            <li>Riverbud</li>
                            <li>Sea Stalk</li>
                            <li>Siren's Pollen</li>
                            <li>Storm Silver Ore</li>
                            <li>Tough Jerky</li>
                        </ul>
                    </div>
                    <div className="cardContainer__card">
                        <h3 className="cardContainer__card__title">
                            HIGHEST PRICED
                        </h3>
                        <ul className="cardContainer__card__list">
                            <li>Akunda's Bite</li>
                            <li>Anchor Weed</li>
                            <li>Goblin Glider Kit</li>
                            <li>Monelite Ore</li>
                            <li>Platinum Ore</li>
                            <li>Riverbud</li>
                            <li>Sea Stalk</li>
                            <li>Siren's Pollen</li>
                            <li>Storm Silver Ore</li>
                            <li>Tough Jerky</li>
                        </ul>
                    </div>
                    <div className="cardContainer__card">
                        <h3 className="cardContainer__card__title">
                            WATCH LIST
                        </h3>
                        <ul className="cardContainer__card__list">
                            <li>Akunda's Bite</li>
                            <li>Anchor Weed</li>
                            <li>Goblin Glider Kit</li>
                            <li>Monelite Ore</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
