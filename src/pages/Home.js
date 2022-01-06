import React from "react";
import "./css/Home.css";
import Header from "../components/Header";
import Social from "../components/Social";
import Landing from "../components/Home/Landing";
import Work from "../pages/Work";

class Home extends React.Component {
	render() {
		return (
			<div className="first-page">
				<Header />
				<section className="home-content">
					<Landing />
					<aside>
						<Social />
					</aside>
				</section>
				<section className="work">
					<Work />
				</section>
			</div>
		);
	}
}

export default Home;
