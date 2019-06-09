import React, { Component } from 'react'
import './Hero.scss';
import anime from './lib/anime.js'

let morph = anime({
    targets: '.polymorph',
    points: [
      { value: '200,99 0,99 0,0 38.83,0 49,61' },
    ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: true
  });


export class Hero extends Component {

    render() {
        return (
            <div>
                <svg viewBox="0 0 200 99" >
                    <polygon className="polymorph" points="200,99 0,99 0,0 37,0 200,0 	"/>
                </svg>
            </div>
        )
    }
}

export default Hero;

