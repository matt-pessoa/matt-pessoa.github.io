import React from "react";
import "./css/Home.css";
import Header from "../components/Header";
import Social from "../components/Social";
import Landing from "../components/Home/Landing";

class Home extends React.Component {
	render() {
		return (
			<div className="first-page">
				<Header />
				<section className="home-content">
					<main>
						<Landing />
					</main>
					<aside>
						<Social />
					</aside>
				</section>
			</div>
		);
	}
}

export default Home;
