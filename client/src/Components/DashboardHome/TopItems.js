import React, { Component } from 'react';
import './TopItems.scss';
import { Link } from 'react-router-dom';

export class TopItems extends Component {
    render() {
        return (
            <div className="dashHome">
                <div className="dashboardCards">
                    <h2>Top Items</h2>
                    <div className="dashboardCards__cards">
                        <Link to='itemHistory/152507' className="dashboardCards__cards--center">
                            <h3>Akunda's Bite</h3>
                            <p>1,360 g</p>
                        </Link>
                        <Link to='itemHistory/152512' className="dashboardCards__cards--center">
                            <h3>Monelite Ore</h3>
                            <p>725 g</p>
                        </Link>
                        <Link to='itemHistory/163223' className="dashboardCards__cards--center">
                            <h3>Battle Potion of Agility</h3>
                            <p>10,217 g</p>
                        </Link>
                        <Link to='itemHistory/152508' className="dashboardCards__cards--center">
                            <h3>Winter's Kiss</h3>
                            <p>512 g</p>
                        </Link>
                        <Link to='itemHistory/152507' className="dashboardCards__cards--center">
                            <h3>Blood-Stained Bone</h3>
                            <p>473 g</p>
                        </Link>
                        <Link to='itemHistory/153051' className="dashboardCards__cards--center">
                            <h3>Mistscale</h3>
                            <p>502 g</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopItems;
