import React from "react";
import ListItem from "./ListItem";

const ListTasks = ({ tasks, removeTask, switchTaskIsDone, hideDone }) => (
	<ul>
		{tasks.map(
			(task, index) =>
				(hideDone && task.done) || (
					<ListItem
						{...{
							key: index,
							index,
							task,
							removeTask,
							switchTaskIsDone,
						}}
					/>
				)
		)}
	</ul>
);

export default ListTasks;
