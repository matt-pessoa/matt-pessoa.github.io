import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import homeIconClicked from "../images/home-icon-clicked.svg";
// import homeIconUnclicked from "../images/home-icon-uncliked.svg";

class Header extends React.Component {
	render() {
		return (
			<header>
				<nav>
					<Link to="/">
						<img className="home-icon" src={homeIconClicked} alt="home" />
					</Link>
					<ul>
						<li>
							<Link to="/work">projetos</Link>
						</li>
						<li>
							<Link to="/about">sobre mim</Link>
						</li>
						<li>
							<Link to="/contact">contato</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
