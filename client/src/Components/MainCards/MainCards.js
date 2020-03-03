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
                        <li><Link to='/dashboard/details/152507'>Akunda's Bite</Link></li>
                        <li><Link to='/dashboard/details/109076'>Goblin Glider Kit</Link></li>
                        <li><Link to='/dashboard/details/117'>Tough Jerky</Link></li>
                        <li><Link to='/dashboard/details/109118'>Blackrock Ore</Link></li>
                        <li><Link to='/dashboard/details/152508'>Winter's Kiss</Link></li>
                        <li><Link to='/dashboard/details/152509'>Siren's Pollen</Link></li>
                    </ul>
                </div>
                <div className="cardContainer__card">
                    <h3 className="cardContainer__card__title">
                        HIGHEST PRICED
                    </h3>
                    <ul className="cardContainer__card__list">
                        <li><Link to='/dashboard/details/152510'>Anchor Weed</Link></li>
                        <li><Link to='/dashboard/details/152513'>Platinum Ore</Link></li>
                        <li><Link to='/dashboard/details/163223'>Battle Potion of Agility</Link></li>
                        <li><Link to='/dashboard/details/163222'>Battle Potion of Intellect</Link></li>
                        <li><Link to='/dashboard/details/163224'>Battle Potion of Strength</Link></li>
                        <li><Link to='/dashboard/details/152579'>Storm Silver Ore</Link></li>
                        <li><Link to='/dashboard/details/153050'>Shimmerscale</Link></li>
                        <li><Link to='/dashboard/details/152576'>Tidespray Linen</Link></li>
                    </ul>
                </div>
                <div className="cardContainer__card">
                    <h3 className="cardContainer__card__title">
                        WATCH LIST
                    </h3>
                    <ul className="cardContainer__card__list">
                        <li><Link to='/dashboard/details/152507'>Akunda's Bite</Link></li>
                        <li><Link to='/dashboard/details/152505'>Riverbud</Link></li>
                        <li><Link to='/dashboard/details/152511'>Sea Stalk</Link></li>
                        <li><Link to='/dashboard/details/152512'>Monelite Ore</Link></li>
                        <li><Link to='/dashboard/details/163223'>Battle Potion of Agility</Link></li>
                        <li><Link to='/dashboard/details/163224'>Battle Potion of Strength</Link></li>
                    </ul>
                </div>
                <small>&copy; 2020 <a href="https://www.joshtag.com/">Joshua Taguicana</a></small>
            </div>
        )
    }
}

export default MainCards;
