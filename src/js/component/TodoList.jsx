import React from "react";
import AddTaskInput from "./AddTaskInput";
import Papers from "./Papers";
import ListItem from "./ListItem";
import useTasksApi from "../hooks/useTasksApi";

const TodoList = () => {
	const { tasks, addTask, removeTask, removeAllTasks } = useTasksApi();

	return (
		<Papers>
			<main>
				<AddTaskInput {...{ addTask, removeAllTasks }} />

				<ul>
					{tasks.map((task, index) => (
						<ListItem
							{...{ key: index, index, task, removeTask }}
						/>
					))}
				</ul>

				<footer>
					{tasks.length
						? tasks.length +
						  ` item${tasks.length > 1 ? "s" : ""} left`
						: "No tasks, add a task"}
				</footer>
			</main>
		</Papers>
	);
};

export default TodoList;
