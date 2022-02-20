import React from "react";
import ListItem from "./ListItem";

const ListTasks = ({ tasks, removeTask }) => (
	<ul>
		{tasks.map((task, index) => (
			<ListItem {...{ key: index, index, task, removeTask }} />
		))}
	</ul>
);

export default ListTasks;
