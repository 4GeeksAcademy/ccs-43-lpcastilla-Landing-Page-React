import React from "react";

//include images into your bundle
import {Jumbotron} from "./jumbotron.jsx"

//create your first component
export const Home = () => {
	return (
		<div className="container">
			<Jumbotron />
		</div>
	);
};


