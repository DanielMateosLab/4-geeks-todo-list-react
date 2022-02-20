import React from "react";
import "styles/ListSection.css";

/** Converts children elems. in a todo-list row */
const ListSection = ({ children, htmlElement = "div" }) =>
	React.createElement(
		htmlElement,
		{ className: "list-section" },
		...children
	);

export default ListSection;
