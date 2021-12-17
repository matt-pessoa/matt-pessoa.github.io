import React from "react";
import "./css/Social.css";
import gitHub from "../images/github-icon.png";
import linkedin from "../images/linkedin-icon.png";

function Social() {
	return (
		<section className="social">
			<img src={gitHub} alt="" />
			<img src={linkedin} alt="" />
		</section>
	);
}

export default Social;
