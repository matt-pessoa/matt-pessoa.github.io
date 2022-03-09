import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./css/Header.css";
import homeIconClicked from "../images/home-icon-clicked.svg";
import homeIconUnclicked from "../images/home-icon-unclicked.svg";

function Header() {
	const history = useHistory();
	const path = history.location.pathname;

	function checkCurrentPage(page) {
		if (path === page) {
			return { color: "#44deb2" };
		}
		return { color: "##D3D1D1" };
	}

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
						<Link to="/work" style={checkCurrentPage("/work")}>
							projects
						</Link>
					</li>
					<li>
						<Link to="/about" style={checkCurrentPage("/about")}>
							about me
						</Link>
					</li>
					<li>
						<Link to="/contact" style={checkCurrentPage("/contact")}>
							contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
