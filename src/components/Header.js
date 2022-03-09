import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import homeIconClicked from "../images/home-icon-clicked.svg";
// import homeIconUnclicked from "../images/home-icon-uncliked.svg";

function Header() {
	return (
		<header>
			<nav>
				<Link to="/">
					<img className="home-icon" src={homeIconClicked} alt="home" />
				</Link>
				<ul>
					<li>
						<Link to="/work">projects</Link>
					</li>
					<li>
						<Link to="/about">about me</Link>
					</li>
					<li>
						<Link to="/contact">contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
