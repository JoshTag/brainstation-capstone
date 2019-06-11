import React, { Component } from 'react'
import './Hero.scss';
import anime from 'animejs';
import { Link } from 'react-router-dom';

export class Hero extends Component {
    state = {
        heroOpen: false
    }

    openHero = () => {
        anime({
            targets: '.polymorph',
            points: [
            { value: '200,99 0,99 0,0 38.83,0 49,61' },
            { value: '200,99 0,99 0,0 6,0 49,61' }
            ],
            easing: 'easeOutQuad',
            duration: 1800,
            loop: false
        });
        this.setState({
            heroOpen: true
        });
        this.refs.openHeroCTA.setAttribute("id", "displayOpenCtaNone");
        anime({
            targets: '.openedHero',
            opacity: 1,
            duration: 800,
            translateY: 90
        })
    }

    render() {

        console.log(this.state.heroOpen)

        return (
            <div>
                <div ref="openHeroCTA" >
                    <div className="heroTitle"> 
                        <h1 className="heroTitle__header">
                            Warcraft Auctions
                        </h1>
                        <h3 className="heroTitle__description">
                            A source for World of Warcraft auction house statistics
                        </h3>
                    </div>
                    <button 
                        className="openCTA" 
                        onClick={this.openHero}>
                            learn more
                    </button>
                </div>
                <div 
                    className="openedHero"
                    ref="heroOpened">
                    <h3>A source to view World of Warcraft auction house details</h3>
                    <p>
                        View price history, quantity history, and compare price and quantity of auction house items <br/>
                        to farm items on the auction to build your gold
                    </p>
                    <div className="openedHero__btn">
                        <Link 
                            to='/dashboard'>GO TO DASHBOARD</Link>
                    </div>
                </div>
                <svg viewBox="0 0 200 99" >
                    <polygon className="polymorph" points="200,99 0,99 0,0 37,0 200,0 	"/>
                </svg>
            </div>
        )
    }
}

export default Hero;

