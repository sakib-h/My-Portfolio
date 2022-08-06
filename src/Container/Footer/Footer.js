import React, { useState } from "react";
import "./Footer.scss";
import { images } from "../../Constants";
import { AppWrap, MotionWrap } from "../../Wrapper/";
import { client } from "../../Client";
const Footer = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (event) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: name,
			email: email,
			message: message,
		};
		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		});
	};
	return (
		<footer>
			<h2 className="head-text">Take A Coffee & Chat with Me</h2>
			<div className="app__footer-container">
				<div className="app__footer-cards">
					<div className="app__footer-card">
						<img src={images.email} alt="email" />
						<a
							href="mailto:sakib100.sa@gmail.com"
							className="p-text">
							sakib100.sa@gmail.com
						</a>
					</div>
					<div className="app__footer-card">
						<img src={images.mobile} alt="mobile" />
						<a href="tel: +8801303909469" className="p-text">
							+8801303-909469
						</a>
					</div>
				</div>

				{!isFormSubmitted ? (
					<div className="app__footer-form app__flex">
						<div className="app__flex">
							<input
								className="p-text"
								type="text"
								name="name"
								placeholder="Your Name"
								value={name}
								onChange={handleChangeInput}
							/>
						</div>
						<div className="app__flex">
							<input
								className="p-text"
								type="email"
								name="email"
								placeholder="Your Email Address"
								value={email}
								onChange={handleChangeInput}
							/>
						</div>
						<div>
							<textarea
								className="p-text"
								placeholder="Your Message"
								value={message}
								name="message"
								onChange={handleChangeInput}
							/>
						</div>
						<button
							type="button"
							className="p-text"
							onClick={handleSubmit}>
							{loading ? "Sending" : "Send Message"}
						</button>
					</div>
				) : (
					<div>
						<h3 className="head-text">
							Thank you for Getting in Touch
						</h3>
					</div>
				)}
			</div>
		</footer>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__whiteBg"
);
