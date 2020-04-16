import React, { Component } from "react";
import "./DashboardHome.scss";
import { Link } from "react-router-dom";
import anime from "animejs";

const DashboardHome = ({realms}) => {
  // componentDidMount() {
  //     anime({
  //         targets: '.animeOne',
  //         opacity: 1,
  //         duration: 500,
  //         translateY: -800,
  //         easing: 'easeInOutQuart'
  //     })
  //     anime({
  //         targets: '.animeTwo',
  //         opacity: 1,
  //         duration: 800,
  //         translateY: -800,
  //         easing: 'easeInOutQuart'
  //     })
  //     anime({
  //         targets: '.animeThree',
  //         opacity: 1,
  //         duration: 1000,
  //         translateY: -800,
  //         easing: 'easeInOutQuart'
  //     })
  // }

  return (
    <div>
      <h2>Choose Your Realm</h2>
			<ul>
      {realms.map(realm => {
				return (
					<li key={"realm" + realm.id}>
						<Link to={`/dashboard/details/${realm.id}`}>
							{realm.name}
						</Link>
					</li>
				)
			})}
			</ul>
    </div>
  );
};

export default DashboardHome;
