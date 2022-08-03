import React, { useState, useEffect } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { client } from "../../Client";
const Work = () => {
	const handleWorkFilter = (item) => {};
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);

	useEffect(() => {
		const query = `*[_type == "works"]{title,description,imgUrl{asset->{_id,url}}}`;
		client.fetch(query).then((data) => {
			console.log(data);
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

	return (
		<>
			<h2 className="head-text">
				My Creative <span>Portfolio</span>
			</h2>

			<div className="app__work-filter">
				{[
					"UI/UX",
					"Web App",
					"Mobile App",
					"React Js",
					"All",
				].map((item, index) => (
					<div
						key={index}
						onClick={() => {
							handleWorkFilter(item);
						}}
						className={`app__work-filter-item app_flex p-text ${
							activeFilter === item
								? "item-active"
								: ""
						}`}
					>
						{item}
					</div>
				))}
			</div>
			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="appPP__work-portfolio"
			>
				{filterWork.map((work, index) => (
					<div
						className="app__work-item app__flex"
						key={index}
					>
						<div className="app__work-img app__flex">
							<img
								src={work.imgUrl.asset.url}
								alt={work.title}
							/>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default Work;
