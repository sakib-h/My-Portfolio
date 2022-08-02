import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../Constants";
import { AppWrap } from "../../Wrapper";
// import { urlFor, client } from "../../Client";
const About = () => {
	// const [abouts, setAbouts] = useState([]);
	// useEffect(() => {
	// 	const query = '*[_type == "abouts"]';
	// 	client.fetch(query)
	// 		.then((data) => {
	// 			setAbouts(data);
	// 		})
	// 		.catch((err) => console.log(err));
	// }, []);

	const abouts = [
		{
			title: "Web Developer",
			description:
				"Experienced Web Developer with a passion for building and functional Web Applications.",
			imgUrl: images.about01,
		},
		{
			title: "Frontend Developer",
			description:
				"Experienced Frontend Developer with a passion for building and functional Web Applications.",
			imgUrl: images.about02,
		},
		{
			title: "React Developer",
			description:
				"Experienced React Developer with a passion for building and functional Web Applications.",
			imgUrl: images.about03,
		},
		{
			title: "UI Designer",
			description:
				"Experienced UI Designer with a passion for Designing Web Applications.",
			imgUrl: images.about04,
		},
	];

	return (
		<>
			<h2 className="head-text">
				I Know That <span>Good Development</span> means{" "}
				<span>Good Business</span>
			</h2>
			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{
							duration: 0.5,
							type: "tween",
						}}
						className="app__profile-item"
						key={about.title + index}
					>
						<img src={about.imgUrl} alt={about.title} />
						<h2
							className="bold-text"
							style={{ marginTop: 20 }}
						>
							{about.title}
						</h2>

						<p
							className="p-text"
							style={{ marginTop: 10 }}
						>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(About, "about");
