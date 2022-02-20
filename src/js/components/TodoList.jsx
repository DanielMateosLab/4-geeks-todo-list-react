import React from "react";
import ListHeader from "./ListHeader";
import Papers from "./Papers";
import ListItem from "./ListItem";
import useTasksApi from "../hooks/useTasksApi";
import ListFooter from "./ListFooter";

const TodoList = () => {
	const { tasks, addTask, removeTask, removeAllTasks } = useTasksApi();

	return (
		<Papers>
			<main>
				<ListHeader {...{ addTask, removeAllTasks }} />

				<ul>
					{tasks.map((task, index) => (
						<ListItem
							{...{ key: index, index, task, removeTask }}
						/>
					))}
				</ul>

				<ListFooter tasksCount={tasks.length} />
			</main>
		</Papers>
	);
};

export default TodoList;
