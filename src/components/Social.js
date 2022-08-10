import React from "react";
import "./css/Social.css";
import gitHub from "../images/github-icon.png";
import linkedin from "../images/linkedin-icon.png";

function Social() {
	return (
		<section className="social">
			<a href="https://github.com/matt-pessoa" target="_blank" rel="noreferrer">
				<img src={gitHub} alt="" />
			</a>
			<a
				href="https://www.linkedin.com/in/matt-pessoa/"
				target="_blank"
				rel="noreferrer"
			>
				<img src={linkedin} alt="" />
			</a>
		</section>
	);
}

export default Social;
