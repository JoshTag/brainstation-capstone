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
                        <Link to={`${this.props.url}/details/109076`} className="dashboardCards__cards--center">
                            <h3>Goblin Glider Kit</h3>
                            <p>924 g</p>
                        </Link>
                        <Link to={`${this.props.url}/details/117`}className="dashboardCards__cards--center">
                            <h3>Tough Jerky</h3>
                            <p>198 g</p>
                        </Link>
                        <Link to={`${this.props.url}/details/109118`}className="dashboardCards__cards--center">
                            <h3>Blackrock Ore</h3>
                            <p>266 g</p>
                        </Link>
                        <Link to={`${this.props.url}/details/152508`}className="dashboardCards__cards--center">
                            <h3>Winter's Kiss</h3>
                            <p>512 g</p>
                        </Link>
                        <Link to={`${this.props.url}/details/152507`}className="dashboardCards__cards--center">
                            <h3>Blood-Stained Bone</h3>
                            <p>473 g</p>
                        </Link>
                    </div>
                </div>
                <div className="dashboardCards">
                    <h2>Profession Items</h2>
                    <div className="dashboardCards__cards">
                        <Link to={`${this.props.url}/details/152507`} className="dashboardCards__cards--center">
                            <h3>Akunda's Bite</h3>
                            <p>1,360 g</p>
                        </Link>
                        <Link to={`${this.props.url}/details/152512`}className="dashboardCards__cards--center">
                            <h3>Monelite Ore</h3>
                            <p>725 g</p>
                        </Link>
                        <Link to={`${this.props.url}/details/152510`}className="dashboardCards__cards--center">
                            <h3>Anchor Weed</h3>
                            <p>2,725 g</p>
                        </Link>
                        <Link to={`${this.props.url}/details/152508`}className="dashboardCards__cards--center">
                            <h3>Winter's Kiss</h3>
                            <p>512 g</p>
                        </Link>
                        <Link to={`${this.props.url}/details/152513`}className="dashboardCards__cards--center">
                            <h3>Platinum Ore</h3>
                            <p>2,213 g</p>
                        </Link>
                    </div>
                </div>
                <div className="dashboardCards">
                    <h2>Highest Priced</h2>
                    <div className="dashboardCards__cards">
                        <Link to={`${this.props.url}/details/152510`} className="dashboardCards__cards--center">
                            <h3>Anchor Weed</h3>
                            <p>2,725 g</p>
                        </Link>
                        <Link to={`${this.props.url}/details/152513`}className="dashboardCards__cards--center">
                            <h3>Platinum Ore</h3>
                            <p>2,213 g</p>
                        </Link>
                        <Link to={`${this.props.url}/details/163223`}className="dashboardCards__cards--center">
                            <h3>Battle Potion of Agility</h3>
                            <p>10,217 g</p>
                        </Link>
                        <Link to={`${this.props.url}/details/163222`}className="dashboardCards__cards--center">
                            <h3>Battle Potion of Intellect</h3>
                            <p>9,977 g</p>
                        </Link>
                        <Link to={`${this.props.url}/details/163224`}className="dashboardCards__cards--center">
                            <h3>Battle Potion of Strength</h3>
                            <p>6,157 g</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopItems;
