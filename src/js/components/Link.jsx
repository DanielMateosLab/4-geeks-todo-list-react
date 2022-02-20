import React from "react";
import "styles/Link.css";

const Link = ({ text, onClick }) => {
	function handleClick(event) {
		event.preventDefault();

		onClick(event);
	}

	return (
		<a href="#" onClick={handleClick}>
			{text}
		</a>
	);
};

export default Link;
