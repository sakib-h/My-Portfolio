import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client } from "../../Client";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./Skills.scss";
const Skills = () => {
	const [experiences, setExperiences] = useState([]);
	const [skills, setSkills] = useState([]);
	useEffect(() => {
		const query = `*[_type == "experiences"]`;
		const skillsQuery = `*[_type == "skills"]{name, bgColor, icon{asset->{_id,url}}}`;
		client.fetch(query).then((data) => {
			setExperiences(data);
		});
		client.fetch(skillsQuery).then((data) => {
			setSkills(data);
		});
	}, []);

	return (
		<>
			<h2 className="head-text">Skills & Experience</h2>
			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills.map((skill) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex"
							key={skill.name}>
							<div
								className="app__flex"
								style={{
									backgroundColor: skill.bgColor,
								}}>
								<img
									src={skill.icon.asset.url}
									alt={skill.name}
								/>
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>

				<motion.div className="app__skills-exp">
					{experiences.map((experience) => (
						<motion.div
							className="app__skills-exp-item"
							key={experience.year}>
							<div className="app__skills-exp-year">
								<p className="bold-text">{experience.year}</p>
							</div>
							<motion.div className="app__skills-exp-works">
								{experience.works.map((work) => (
									<>
										<motion.div
											whileInView={{ opacity: [0, 1] }}
											transition={{ duration: 0.5 }}
											className="app__skills-exp-work"
											data-tip
											data-for={work.name}
											key={work.name}>
											<h4 className="bold-text">
												{work.name}
											</h4>
											<p className="p-text">
												{work.company}
											</p>
											<p className="text-bold">
												{work.desc}
											</p>
										</motion.div>
									</>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Skills, "app__skills"),
	"skills",
	"app__whiteBg"
);
