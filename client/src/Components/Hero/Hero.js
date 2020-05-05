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
      duration: 2400,
      loop: false
    });
    this.refs.openHeroCTA.setAttribute("id", "displayOpenCtaNone");
    anime({
      targets: ".openedHero",
      easing: "easeOutQuad",
      opacity: 1,
      duration: 1600,
    });
    anime({
      targets: ".openedHero__header",
      easing: "easeOutQuad",
      opacity: 1,
      duration: 800,
      translateY: 50,
      delay: 200
    });
    anime({
      targets: ".openedHero__description",
      easing: "easeOutQuad",
      opacity: 1,
      duration: 800,
      translateY: 50,
      delay: 400
    });
    anime({
      targets: ".openedHero__btn",
      easing: "easeOutQuad",
      opacity: 1,
      duration: 800,
      translateY: 50,
      delay: 600
    });
  };

  render() {
    return (
      <div className="hero">
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
          <h3 className="openedHero__header">A Source To View World of Warcraft Auction House Details</h3>
          <p className="openedHero__description">
            View price history, quantity history, and compare price and quantity
            of auction house items to farm items on the auction house to build your gold
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
