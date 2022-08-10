import React from "react";
import Header from "../components/Header";
import Social from "../components/Social";
import AboutContent from "../components/About/AboutContent";
import Skills from "../components/About/Skills";
import "./css/About.css";

function About() {
	return (
		<div>
			<Header />
			<section className="about-section" id="about">
				<AboutContent />
				<aside className="social-about">
					<Social />
				</aside>
			</section>
			<Skills />
		</div>
	);
}

export default About;
