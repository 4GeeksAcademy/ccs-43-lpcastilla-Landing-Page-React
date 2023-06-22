import React from "react";

//include images into your bundle
import {Jumbotron} from "./jumbotron.jsx"
import {NavBar} from "./Navbar.jsx"


import  {Card}  from "./card.jsx";

//create your first component
export const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar />
			<Jumbotron />
			<Card />
		</div>
	);
};


