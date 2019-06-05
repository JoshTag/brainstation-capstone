import React, { Component } from 'react';
import './MainCards.scss';
import { Link } from 'react-router-dom';

export class MainCards extends Component {
    render() {
        return (
            <div className="cardContainer">
            <div className="cardContainer__card">
                <h3 className="cardContainer__card__title">
                    POPULAR ITEMS
                </h3>
                <ul className="cardContainer__card__list">
                    <li><Link to='/itemHistory/152507'>Akunda's Bite</Link></li>
                    <li>Anchor Weed</li>
                    <li>Goblin Glider Kit</li>
                    <li>Monelite Ore</li>
                    <li>Platinum Ore</li>
                    <li>Riverbud</li>
                    <li>Sea Stalk</li>
                    <li>Siren's Pollen</li>
                    <li>Storm Silver Ore</li>
                    <li><Link to='/itemHistory/117'>Tough Jerky</Link></li>
                </ul>
            </div>
            <div className="cardContainer__card">
                <h3 className="cardContainer__card__title">
                    HIGHEST PRICED
                </h3>
                <ul className="cardContainer__card__list">
                    <li><Link to='/itemHistory/152507'>Akunda's Bite</Link></li>
                    <li>Anchor Weed</li>
                    <li>Goblin Glider Kit</li>
                    <li>Monelite Ore</li>
                    <li>Platinum Ore</li>
                    <li>Riverbud</li>
                    <li>Sea Stalk</li>
                    <li>Siren's Pollen</li>
                    <li>Storm Silver Ore</li>
                    <li><Link to='/itemHistory/117'>Tough Jerky</Link></li>
                </ul>
            </div>
            <div className="cardContainer__card">
                <h3 className="cardContainer__card__title">
                    WATCH LIST
                </h3>
                <ul className="cardContainer__card__list">
                    <li><Link to='/itemHistory/152507'>Akunda's Bite</Link></li>
                    <li>Anchor Weed</li>
                    <li>Goblin Glider Kit</li>
                    <li>Monelite Ore</li>
                </ul>
            </div>
        </div>
        )
    }
}

export default MainCards;
