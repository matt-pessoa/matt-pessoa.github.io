import React from "react";
import Header from "../components/Header";
import "./css/Work.css";

class Work extends React.Component {
	render() {
		return (
			<>
				<Header />
				<section className="limiter-work" id="work-page">
					<h1 className="work-heading">&lt;projects&gt;</h1>
				</section>
			</>
		);
	}
}

export default Work;
