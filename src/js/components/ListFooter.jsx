import React from "react";
import ListSection from "./ListSection";

const ListFooter = ({ tasksCount }) => (
	<ListSection htmlElement="footer">
		{tasksCount
			? tasksCount + ` item${tasksCount > 1 ? "s" : ""} left`
			: "No tasks, add a task"}
	</ListSection>
);

export default ListFooter;
