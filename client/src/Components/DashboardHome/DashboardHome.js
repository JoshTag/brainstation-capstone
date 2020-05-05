import React from "react";
import "./DashboardHome.scss";
import { Link } from "react-router-dom";
import loading from "./../../Assets/Logo/loadingsnake.gif"

const DashboardHome = ({ realms, constRealms, setRealms, search }) => {
  console.log(realms);

  const sortRealms = realms.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });

  return (
    <div className="dashboard-home">
      <h2 className="dashboard-home__header">Choose Your Realm</h2>
      <form className="search">
        <input
          placeholder="Search Realm..."
          required
          onKeyUp={event => {
            search(event, constRealms, "name", setRealms);
          }}
        />
      </form>
      {realms.length === 0 ? (
        <img className="loading-gif" src={loading} alt="loading"/>
      ) : (
        <ul className="dashboard-home__realm-list">
          {sortRealms.map(realm => {
            return (
              <li
                className="dashboard-home__realm-items"
                key={"realm" + realm.id}
              >
                <Link to={`/dashboard/details/${realm.id}`}>{realm.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DashboardHome;
