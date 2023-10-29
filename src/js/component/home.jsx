import React from "react";


import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Copyright from "./Copyright"

const Home = () => {
	return (<>
		<Navbar />
		<div className="container">
			<Jumbotron />
			<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
		<Copyright />

	</>
	);
};

export default Home;
