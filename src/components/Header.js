import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import checkCurrentPage from "../helper/checkCurrentPage";
import "./css/Header.css";
import homeIconClicked from "../images/home-icon-clicked.svg";
import homeIconUnclicked from "../images/home-icon-unclicked.svg";

function Header() {
	const history = useHistory();
	const path = history.location.pathname;

	return (
		<header>
			<nav>
				<Link to="/">
					<img
						className="home-icon"
						src={path === "/" ? homeIconClicked : homeIconUnclicked}
						alt="home"
					/>
				</Link>
				<ul>
					<li>
						<Link to="/work" style={checkCurrentPage(path, "/work")}>
							projects
						</Link>
					</li>
					<li>
						<Link to="/about" style={checkCurrentPage(path, "/about")}>
							about me
						</Link>
					</li>
					<li>
						<Link to="/contact" style={checkCurrentPage(path, "/contact")}>
							contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
