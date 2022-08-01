import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../Constants";
const Header = () => {
	const scaleVariAnts = {
		whileInView: {
			scale: [0, 1],
			opacity: [0, 1],
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};
	return (
		<div className="app__header app__flex" id="home">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hello, I am </p>
							<h1 className="head-text">Sakib</h1>
						</div>
					</div>
					<div className="tag-cmp app-flex">
						<p className="p-text">Frontend Developer</p>
						<p className="p-text">Graphics Designer </p>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__header-img"
			>
				<img src={images.profile} alt="Profile-Bg" />
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					className="overlay_circle"
					src={images.circle}
					alt="profile_circle"
				/>
			</motion.div>

			<motion.div
				variant={scaleVariAnts}
				whileInView={scaleVariAnts.whileInView}
				className="app__header-circles"
			>
				{[images.react, images.bootstrap, images.tailwind].map(
					(circle, index) => (
						<div
							className="circle-cmp app__flex"
							key={`circle-${index}`}
						>
							<img src={circle} alt="circle" />
						</div>
					)
				)}
			</motion.div>
		</div>
	);
};

export default Header;
