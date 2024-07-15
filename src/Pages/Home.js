import React from "react";
import bannerImage from "../assets/pizza.jpeg";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="headerContainer">
        <h1>Pedro's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
