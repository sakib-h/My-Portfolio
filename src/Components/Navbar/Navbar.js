import React from "react";
import "./Navbar.scss";
import { images } from "../../Constants";
const Navbar = () => {
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{[
					"Home",
					"About",
					"Work",
					"Skills",
					"Testimonial",
					"Contact",
				].map((item, index) => (
					<li
						className="app__flex p-text"
						key={`link-${item}`}
					>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
