import React from "react";
import Header from "../components/Header";
import Social from "../components/Social";
import "./css/Contact.css";

function Contact() {
	return (
		<div>
			<Header />
			<section className="limiter-contact contact" id="contact-page">
				<h1 className="contact-heading">&lt;contact&gt;</h1>
				<aside>
					<Social />
				</aside>
			</section>
		</div>
	);
}

export default Contact;
