import React, { Component } from 'react'
import './MainCards.scss'

export class MainCards extends Component {
    render() {
        return (
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
        )
    }
}

export default MainCards;
