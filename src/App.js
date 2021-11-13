import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/work" component={Work} />
				</Switch>
			</div>
		);
	}
}

export default App;
