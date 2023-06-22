import React from "react";

//include images into your bundle
import {Jumbotron} from "./jumbotron.jsx"
import {NavBar} from "./Navbar.jsx"
import {Footer} from "./footer.jsx"

import  {Card}  from "./card.jsx";

//create your first component
export const Home = () => {
	return (
		<div className="container-fluid p-0">
			<NavBar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
};


