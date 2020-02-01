import React, { Component } from "react";
import "./GraphsInfo.scss";
import anime from "animejs";

export class GraphsInfo extends Component {
  componentDidMount() {
    anime({
      targets: ".animateOne",
      opacity: 1,
      duration: 300,
      translateX: -500,
      easing: "easeInOutQuart"
    });
    anime({
      targets: ".animateTwo",
      opacity: 1,
      duration: 500,
      translateX: -500,
      easing: "easeInOutQuart"
    });
  }

  render() {
    const {
      priceavg,
      pricemax,
      pricemin,
      quantityavg,
      when,
      quantitymin,
      quantitymax,
      pricestart,
      priceend,
      item,
      name_enus
    } = this.props.itemHistory[this.props.itemHistory.length - 1];

    return (
      <div>
        <div className="graphBanner">
          <a href={`https://www.wowhead.com/item=${item}/`}>
            <h1 className="itemSearch__header">{name_enus}</h1>
          </a>
          <h3 className="infoTitle">Current Info for {when}</h3>
        </div>
        <div className="graphInfo animateOne">
          <div className="graphInfo__card">
            <h2 className="graphInfo__card__title">Average Price</h2>
            <p className="graphInfo__card__units">{priceavg} g</p>
          </div>
          <div className="graphInfo__card">
            <h2 className="graphInfo__card__title">Max Price</h2>
            <p className="graphInfo__card__units">{pricemax} g</p>
          </div>
          <div className="graphInfo__card">
            <h2 className="graphInfo__card__title">Min Price</h2>
            <p className="graphInfo__card__units">{pricemin} g</p>
          </div>
          <div className="graphInfo__card">
            <h2 className="graphInfo__card__title">Price Start</h2>
            <p className="graphInfo__card__units">{pricestart} g</p>
          </div>
        </div>
        <div className="graphInfo animateTwo">
          <div className="graphInfo__card">
            <h2 className="graphInfo__card__title">Average Quantity</h2>
            <p className="graphInfo__card__units">{quantityavg}</p>
          </div>
          <div className="graphInfo__card">
            <h2 className="graphInfo__card__title">Max Quantity</h2>
            <p className="graphInfo__card__units">{quantitymin}</p>
          </div>
          <div className="graphInfo__card">
            <h2 className="graphInfo__card__title">Min Quantity</h2>
            <p className="graphInfo__card__units">{quantitymax}</p>
          </div>
          <div className="graphInfo__card">
            <h2 className="graphInfo__card__title">Price End</h2>
            <p className="graphInfo__card__units">{priceend} g</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GraphsInfo;
