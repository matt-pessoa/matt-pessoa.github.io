import React from "react";
import { useHistory } from "react-router";
import "../css/ContactButton.css";

function ContactButton() {
	const history = useHistory();

	const handleSubmit = () => {
		history.push("/contact");
	};

	return (
		<form onSubmit={() => handleSubmit()}>
			<button className="contact-btn button-fill-left">Fale comigo!</button>
		</form>
	);
}

export default ContactButton;
