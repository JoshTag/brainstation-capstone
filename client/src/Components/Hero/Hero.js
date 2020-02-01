import React, { Component } from "react";
import "./Hero.scss";
import anime from "animejs";
import { Link } from "react-router-dom";

export class Hero extends Component {
  openHero = () => {
    anime({
      targets: ".polymorph",
      points: [
        { value: "200,99 0,99 0,0 38.83,0 49,61" },
        { value: "200,99 0,99 0,0 6,0 49,61" }
      ],
      easing: "easeOutQuad",
      duration: 1800,
      loop: false
    });
    this.refs.openHeroCTA.setAttribute("id", "displayOpenCtaNone");
    anime({
      targets: ".openedHero",
      opacity: 1,
      duration: 900,
      translateY: 90
    });
  };

  render() {
    return (
      <div>
        <div ref="openHeroCTA">
          <div className="heroTitle">
            <h1 className="heroTitle__header">Warcraft Auctions</h1>
            <h3 className="heroTitle__description">
              A Source For World of Warcraft Auction House Statistics
            </h3>
          </div>
          <button className="openCTA" onClick={this.openHero}>
            learn more
          </button>
        </div>
        <div className="openedHero" ref="heroOpened">
          <h3>A Source to View World of Warcraft Auction House Details</h3>
          <p>
            View price history, quantity history, and compare price and quantity
            of auction house items <br />
            to farm items on the auction house to build your gold
          </p>
          <div className="openedHero__btn">
            <Link to="/dashboard">GO TO DASHBOARD</Link>
          </div>
        </div>
        <svg viewBox="0 0 200 99">
          <polygon className="polymorph" points="200,99 0,99 0,0 37,0 200,0" />
        </svg>
      </div>
    );
  }
}

export default Hero;
