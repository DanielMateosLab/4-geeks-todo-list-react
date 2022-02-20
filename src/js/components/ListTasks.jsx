import React from "react";
import ListItem from "./ListItem";

const ListTasks = ({ tasks, removeTask, switchTaskIsDone }) => (
	<ul>
		{tasks.map((task, index) => (
			<ListItem
				{...{ key: index, index, task, removeTask, switchTaskIsDone }}
			/>
		))}
	</ul>
);

export default ListTasks;
