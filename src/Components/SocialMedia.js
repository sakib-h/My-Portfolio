import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SocialMedia = () => {
	return (
		<div className="app__social">
			<a
				href="https://github.com/sakib-h"
				target="_blank"
				rel="noreferrer"
				title="/sakib-h">
				<BsGithub />
			</a>
			<a
				href="https://www.facebook.com/sakib.hasan1998"
				target="_blank"
				rel="noreferrer"
				title="/sakib.hasan1998">
				<FaFacebookF />
			</a>
			<a
				href="https://www.instagram.com/__sakibhasan/"
				target="_blank"
				rel="noreferrer"
				title="/__sakibhasan">
				<BsInstagram />
			</a>
		</div>
	);
};

export default SocialMedia;
