import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import "./css/Header.css";
import homeIconClicked from "../images/home-icon-clicked.svg";
// import homeIconUnclicked from "../images/home-icon-uncliked.svg";

function Header() {
	return (
		<header>
			<nav>
				<Link to="/">
					{/* <LinkScroll
						activeClass="active"
						to="landing"
						spy={true}
						smooth={true}
						offset={0}
						duration={700}
					> */}
					<img className="home-icon" src={homeIconClicked} alt="home" />
					{/* </LinkScroll> */}
				</Link>
				<ul>
					<Link to="/work">
						{/* <LinkScroll
							activeClass="active"
							to="work-page"
							spy={true}
							smooth={true}
							offset={0}
							duration={700}
						> */}
						projects
						{/* </LinkScroll> */}
					</Link>
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
