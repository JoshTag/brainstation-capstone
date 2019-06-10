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

    }

    render() {

        console.log(this.state.heroOpen)

        return (
            <div>
                <div ref="openHeroCTA" >
                    <div className="heroTitle"> 
                        <h1>
                            Warcraft Auctions
                        </h1>
                        <h3>
                            A source for World of Warcraft auction house statistics
                        </h3>
                    </div>
                    <button 
                        className="openCTA" 
                        onClick={this.openHero}>
                            learn more
                    </button>
                </div>
                { this.state.heroOpen === true ?
                    <div 
                        className="openedHero"
                        ref="heroOpened">
                        <Link 
                            to='/dashboard'>TO DASHBOARD</Link>
                    </div>
                : null }
                <svg viewBox="0 0 200 99" >
                    <polygon className="polymorph" points="200,99 0,99 0,0 37,0 200,0 	"/>
                </svg>
            </div>
        )
    }
}

export default Hero;

