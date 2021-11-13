import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/">Início</Link>
						</li>
						<li>
							<Link to="/about">Sobre mim</Link>
						</li>
						<li>
							<Link to="/work">Projetos</Link>
						</li>
						<li>
							<Link to="/contact">Contato</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
