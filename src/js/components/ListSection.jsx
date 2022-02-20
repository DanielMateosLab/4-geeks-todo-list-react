import React from "react";

/** Converts children elems. in a todo-list row */
const ListSection = ({ children, htmlElement = "div" }) =>
	React.createElement(htmlElement, { className: "list-item" }, ...children);

export default ListSection;
